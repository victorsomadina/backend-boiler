import {ApolloServer} from "apollo-server-express";
import "dotenv/config";
import {default as Express, Request, Response} from "express";
import {graphqlUploadExpress} from "graphql-upload";
import {createServer} from "http";
import "reflect-metadata";
import {Config} from "../config/Config";
import {createDB} from "../database/databaseConnection";
import {createDynamoDB} from "../database/dynamoDbConnection";
import {MongoDbConnection} from "../database/mongoDbConnection";
import {graphqlSchema} from "../graphql/graphqlSchema";
import {registerApiRoutes} from "../restApi/routes";
import {buildServerOptionsGraphQL} from "./serverOptions";

export interface SubscriptionServerOnConnectParams {
    Authorization: string | undefined;
    authorization: string | undefined;
    headers: Omit<SubscriptionServerOnConnectParams, "headers"> | undefined;
}

const main = async () => {
    // Db and dependencies initialization
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const [_db, schema, _dynamo, _mongo] = await Promise.all([
        createDB(),
        graphqlSchema(Config.local),
        createDynamoDB(),
        MongoDbConnection.connect(),
    ]);

    // GraphQL initialization
    const serverOptions = await buildServerOptionsGraphQL(schema);
    const server = new ApolloServer(serverOptions);

    // Express initialization
    const app = Express();

    // Middlewares
    app.use(Express.json());
    app.use(graphqlUploadExpress({maxFileSize: 100_000_000, maxFiles: 10}));

    // Api
    registerApiRoutes(app);

    app.get("/", (_req: Request, res: Response) => {
        res.send("Backend");
    });

    const httpServer = createServer(app);

    // Start server
    await server.start();

    server.applyMiddleware({app});

    const port = process.env.PORT || 3333;

    httpServer.listen({port}, () => {
        console.log(`GraphQL server ready and listening at ==> http://localhost:${port}${server.graphqlPath}`);
        console.log(`API server ready and listening at ==> http://localhost:${port}/api`);
    });
};

main().catch((error) => {
    console.log(error, "error");
});
