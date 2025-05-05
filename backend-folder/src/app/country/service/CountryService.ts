import {Service} from "typedi";
import {Country} from "../entities/Country";
import {CountryRepository} from "../repositories/CountryRepository";

@Service()
export class CountryService {
    constructor(private readonly countryRepository: CountryRepository) {}

    async getAll(): Promise<Country[]> {
        return this.countryRepository.getAll();
    }
}
