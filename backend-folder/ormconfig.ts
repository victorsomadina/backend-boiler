// File used only to generate migrations

import {Config} from "./src/config/Config";

export default {
    synchronize: false,
    logging: false,
    entities: ["./src/**/entities/**/*.{ts,js}"],
    migrations: ["./src/database/migrations/*.{ts,js}"],
    migrationsRun: false,
    cli: {
        migrationsDir: "./src/database/migrations",
    },
    ...Config.db.sqlMigrations,
};
