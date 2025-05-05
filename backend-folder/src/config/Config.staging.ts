import {ConnectionOptions} from "typeorm/connection/ConnectionOptions";
import {AWSConfig, IConfig, MailingConfig} from "./IConfig";

const dbConnectionOptions: ConnectionOptions = {
    type: "mysql",
    host: process.env.DB_HOST ?? "localhost",
    port: parseInt(process.env.DB_PORT ?? "") ?? 3307,
    username: process.env.DB_USERNAME ?? "root",
    password: process.env.DB_PASSWORD ?? "root",
    database: process.env.DB_NAME ?? "test_db",
};

const awsConfig: AWSConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    region: "us-east-1",
};


const mailingConfig: MailingConfig = {
    mailchimpApiKey: "",
};

const api = "";

const mongoUri = process.env.MONGO_DB ?? "mongodb://root:root@127.0.0.1:27017/dashboard?authSource=admin";

class ConfigStaging implements IConfig {
    local = false;
    production = false;
    db = {sql: dbConnectionOptions, sqlMigrations: dbConnectionOptions, mongo: mongoUri};
    aws = awsConfig;
    mailing = mailingConfig;
    jwtSecret = "C5FBD8D80DD525E0C9E6C0861B821910908C6AA24D2994E905E8B1FE80B05DB9";
    url = api;
    cacheUrl = null;
    sentryDSN = null;
    subscriptionUrl = "http://localhost:6379";
}

const config = new ConfigStaging();
export {config as ConfigStaging};
