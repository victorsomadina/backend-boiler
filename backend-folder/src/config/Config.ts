import {ConfigDev} from "./Config.dev";
import {ConfigLocal} from "./Config.local";
import {ConfigProd} from "./Config.prod";
import {ConfigStaging} from "./Config.staging";
import {ConfigTests} from "./Config.tests";
import {IConfig} from "./IConfig";

const configs: {[key: string]: IConfig} = {
    dev: ConfigDev,
    staging: ConfigStaging,
    production: ConfigProd,
    test: ConfigTests,
    local: ConfigLocal,
};

const env = process.env.NODE_ENV || "local";
const config = configs[env];
export {config as Config};

export class ConfigConstants {
    static CONTACT_EMAIL = "contact@kelly.com";
    static DASHBOARD_URL = "http://localhost:3000";
    static ADMIN_EMAIL = "kgasasira69@gmail.com";
}
