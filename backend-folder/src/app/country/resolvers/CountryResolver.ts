import {Query, Resolver} from "type-graphql";
import {Service} from "typedi";
import {Country} from "../entities/Country";
import {CountryService} from "../service/CountryService";

@Service()
@Resolver()
export class CountryResolver {
    constructor(private readonly countryService: CountryService) {}

    @Query((_returns) => [Country], {description: "Get all countries"})
    async getCountries() {
        return await this.countryService.getAll();
    }
}
