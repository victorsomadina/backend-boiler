import {suite, test} from "@testdeck/mocha";
import {expect} from "chai";
import {graphqlSchema} from "../src/graphql/graphqlSchema";

@suite
export class GraphQLTests {
    @test
    async "schema is generated"() {
        const promise = graphqlSchema(false);
        await expect(promise).to.be.fulfilled;
    }
}
