import {Factory, Sequence} from "@linnify/typeorm-factory";
import {Country} from "../../../src/app/country/entities/Country";

export class CountryFactory extends Factory<Country> {
    entity = Country;

    name = new Sequence((i: number) => `Country ${i}`);
    code = new Sequence((i: number) => `Code ${i}`);
}

export const CountryFactoryInstance = new CountryFactory();
