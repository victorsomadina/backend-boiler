import {getModelForClass, prop} from "@typegoose/typegoose";
import {DocumentType} from "@typegoose/typegoose/lib/types";

export class CityClass {
    @prop()
    name!: string;

    @prop()
    country!: string;

    @prop()
    createdAt!: Date;

    public static createCity(name: string, country: string): CityClass {
        const city = new CityClass();
        city.name = name;
        city.country = country;
        city.createdAt = new Date();

        return city;
    }
}

export const City = getModelForClass(CityClass, {schemaOptions: {collection: "cities"}});
export type ICity = DocumentType<CityClass>;
