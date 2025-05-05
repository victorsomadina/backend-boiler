import {Service} from "typedi";
import {CityRepository} from "../repositories/CityRepository";

@Service()
export class CityService {
    constructor(private readonly cityRepository: CityRepository) {}

    async getCountryCities(country: string) {
        return await this.cityRepository.getCountryCities(country);
    }
}
