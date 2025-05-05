import {Service} from "typedi";
import {City, ICity} from "../entities/City";

@Service()
export class CityRepository {
    async save(city: ICity): Promise<ICity> {
        return await city.save();
    }

    async getCountryCities(country: string): Promise<ICity[]> {
        return City.find({
            country: {$eq: country},
        });
    }
}
