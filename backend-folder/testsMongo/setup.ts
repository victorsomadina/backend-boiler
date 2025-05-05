import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import MockDate from "mockdate";
import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";
import "reflect-metadata";
import {getConnection} from "typeorm";
import {TransactionalTestContext} from "typeorm-transactional-tests";
import {Config} from "../src/config/Config";
import {createDB} from "../src/database/databaseConnection";
import {MongoDbConnection} from "../src/database/mongoDbConnection";

chai.use(chaiAsPromised);

let transactionalContext: TransactionalTestContext;
let mongoDb: MongoMemoryServer;

export const mochaHooks = {
    async beforeAll() {
        try {
            mongoDb = await MongoMemoryServer.create();
            Config.db.mongo = mongoDb.getUri();
            await Promise.all([createDB(), MongoDbConnection.connect()]);
        } catch {
            // Already connected
        }
    },

    async beforeEach() {
        transactionalContext = new TransactionalTestContext(getConnection());
        await Promise.all([transactionalContext.start(), mongoose.connection.db.dropDatabase()]);
    },

    async afterEach() {
        await Promise.all([transactionalContext.finish()]);
        MockDate.reset();
    },

    async afterAll() {
        await MongoDbConnection.disconnect();
        await mongoDb.stop();
    },
};
