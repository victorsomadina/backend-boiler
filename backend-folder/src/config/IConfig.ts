import {ConnectionOptions} from "typeorm/connection/ConnectionOptions";

interface IConfig {
    local: boolean;
    production: boolean;
    db: DbConfig;
    aws: AWSConfig;
    mailing: MailingConfig;
    jwtSecret: string;
    url: string;
    cacheUrl: string | null;
    sentryDSN: string | null;
    subscriptionUrl: string;
}

export interface DbConfig {
    sql: ConnectionOptions;
    sqlMigrations: ConnectionOptions;
    mongo: string;
}

export interface AWSConfig {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
}

export interface MailingConfig {
    mailchimpApiKey: string;
}

export {IConfig};
