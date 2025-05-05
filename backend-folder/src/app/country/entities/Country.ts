import {Field, ObjectType} from "type-graphql";
import {Column, Entity} from "typeorm";
import {BaseEntity} from "../../../common/entities/BaseEntity";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    code!: string;
}
