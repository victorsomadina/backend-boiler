import {suite, test} from "@testdeck/mocha";
import {expect} from "chai";
import Container from "typedi";
import {City} from "../../src/app/country/entities/City";
import {CityRepository} from "../../src/app/country/repositories/CityRepository";
import {CityService} from "../../src/app/country/service/CityService";

@suite
export class CityServiceTests {
    private service!: CityService;
    private repository!: CityRepository;

    async before() {
        this.service = Container.get(CityService);
        this.repository = Container.get(CityRepository);
    }

    @test async "get all cities for a non-existing country"() {
        const city = City.createCity("lagos", "nigeria");
        await this.repository.save(city);

        const result = await this.service.getCountryCities("kenya");

        expect(result.length).to.eq(0);
    }

    @test async "get all cities for existing country"() {
        const city = City.createCity("lagos", "nigeria");
        await this.repository.save(city);

        const result = await this.service.getCountryCities("nigeria");

        expect(result.length).to.eq(1);
    }
}
