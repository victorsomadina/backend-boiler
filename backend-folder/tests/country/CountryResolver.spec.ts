import {suite, test} from "@testdeck/mocha";
import {expect} from "chai";
import {instance, mock, when} from "ts-mockito";
import {Country} from "../../src/app/country/entities/Country";
import {CountryResolver} from "../../src/app/country/resolvers/CountryResolver";
import {CountryService} from "../../src/app/country/service/CountryService";

@suite
export class CountryResolverTests {
    private resolver!: CountryResolver;
    private countryService!: CountryService;

    async before() {
        this.countryService = mock(CountryService);
        this.resolver = new CountryResolver(instance(this.countryService));
    }

    @test
    async "get all countries"() {
        const countries = [new Country(), new Country()];
        when(this.countryService.getAll()).thenResolve(countries);

        const result = await this.resolver.getCountries();

        expect(result).to.deep.eq(countries);
    }
}
