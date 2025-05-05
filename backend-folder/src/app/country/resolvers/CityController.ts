import {Request, Response} from "express";
import {Service} from "typedi";
import {CityService} from "../service/CityService";

export type CityRequest = Request<{country: string}, unknown, unknown, unknown>;

@Service()
export class CityController {
    constructor(private readonly cityService: CityService) {}

    async getCountryCities(req: CityRequest, res: Response) {
        const countryCities = await this.cityService.getCountryCities(req.params.country);

        return res.json(countryCities);
    }
}
