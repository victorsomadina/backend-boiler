import {ConnectionOptions} from "typeorm/connection/ConnectionOptions";
import {AWSConfig, IConfig, MailingConfig} from "./IConfig";

const dbConnectionOptions: ConnectionOptions = {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    migrationsRun: false,
    migrations: [],
};

const awsConfig: AWSConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    region: "us-east-1",
};


const mailingConfig: MailingConfig = {
    mailchimpApiKey: "api key",
};

const mongoUri = "tests";

class ConfigTests implements IConfig {
    local = false;
    production = false;
    db = {sql: dbConnectionOptions, sqlMigrations: dbConnectionOptions, mongo: mongoUri};
    aws = awsConfig;
    mailing = mailingConfig;
    jwtSecret = "4D36EF02AAAF1F3EBE2BADF613F5FC02DAC46DFB2CF465FB92BA7A5D191D28CB";
    url = "test";
    sentryDSN = null;
    cacheUrl = null;
    subscriptionUrl = "http://localhost:6379";
}

const config = new ConfigTests();
export {config as ConfigTests};
