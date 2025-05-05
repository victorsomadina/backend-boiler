import {AnyObject, PipelineStage} from "mongoose";
import {MongoPipelineStage} from "./MongoPipeline";

export class MongoMatch implements MongoPipelineStage {
    private matches: AnyObject[] = [];

    equals(field: string, value: string | number | Date): this {
        const match = {[field]: {$eq: value}};
        this.matches.push(match);
        return this;
    }

    greaterThanOrEqual(field: string, value: string | number | Date): this {
        const match = {[field]: {$gte: value}};
        this.matches.push(match);
        return this;
    }

    lessThanOrEqual(field: string, value: string | number | Date): this {
        const match = {[field]: {$lte: value}};
        this.matches.push(match);
        return this;
    }

    getStage(): PipelineStage.Match {
        return {$match: {$and: this.matches}};
    }
}
