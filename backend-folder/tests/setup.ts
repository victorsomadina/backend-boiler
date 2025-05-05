import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import MockDate from "mockdate";
import "reflect-metadata";
import {getConnection} from "typeorm";
import {TransactionalTestContext} from "typeorm-transactional-tests";
import {createDB} from "../src/database/databaseConnection";

chai.use(chaiAsPromised);

let transactionalContext: TransactionalTestContext;

export const mochaHooks = {
    async beforeAll() {
        try {
            await createDB();
        } catch {
            // Already connected
        }
    },

    async beforeEach() {
        transactionalContext = new TransactionalTestContext(getConnection());
        await transactionalContext.start();
    },

    async afterEach() {
        await transactionalContext.finish();
        MockDate.reset();
    },
};
