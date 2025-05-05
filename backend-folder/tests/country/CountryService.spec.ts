import {suite, test} from "@testdeck/mocha";
import {expect} from "chai";
import {Container} from "typedi";
import {CountryService} from "../../src/app/country/service/CountryService";
import {CountryFactoryInstance} from "./factories/CountryFactory";

@suite
export class CountryServiceTests {
    private service: CountryService;

    constructor() {
        this.service = Container.get(CountryService);
    }

    @test async "get all countries"() {
        const country1 = await CountryFactoryInstance.create();
        const country2 = await CountryFactoryInstance.create();
        const country3 = await CountryFactoryInstance.create();

        const result = await this.service.getAll();

        expect(result.length).to.eq(3);
        expect(result.map((country) => country.id)).to.have.members([country1.id, country2.id, country3.id]);
    }
}
