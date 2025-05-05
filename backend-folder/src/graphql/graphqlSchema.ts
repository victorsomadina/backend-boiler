import "reflect-metadata";

import {DateTimeResolver} from "graphql-scalars";
import {buildSchema, registerEnumType} from "type-graphql";
import {Container} from "typedi";
import {CountryResolver} from "../app/country/resolvers/CountryResolver";
import {ErrorCode} from "../common/errors/ErrorCode";
import {Period} from "../common/inputs/DateRange";
import {SortType} from "../common/queries/Sort";

const resolvers = [CountryResolver] as const;

export const graphqlSchema = async (emitSchema = false) => {
    registerEnumType(ErrorCode, {name: "ErrorCode", description: "Api error codes"});
    registerEnumType(SortType, {name: "SortType"});
    registerEnumType(Period, {name: "Period"});

    return buildSchema({
        resolvers: resolvers,
        validate: true,
        container: Container,
        emitSchemaFile: emitSchema ? {sortedSchema: false} : false,
        scalarsMap: [{type: Date, scalar: DateTimeResolver}],
    });
};
