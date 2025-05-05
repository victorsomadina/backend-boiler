import {Application, Response} from "express";
import {Container} from "typedi";
import {CityController, CityRequest} from "../app/country/resolvers/CityController";

export const registerApiRoutes = (app: Application): void => {
    app.get("/api/cities/:country", async (req: CityRequest, res: Response): Promise<void> => {
        await Container.get(CityController).getCountryCities(req, res);
    });
};
