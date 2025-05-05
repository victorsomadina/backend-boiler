import {Service} from "typedi";
import {Repository} from "typeorm";
import {InjectRepository} from "typeorm-typedi-extensions";
import {BaseRepository} from "../../../common/repositories/BaseRepository";
import {QuerySet} from "../../../common/repositories/QuerySet";
import {Country} from "../entities/Country";

@Service()
export class CountryRepository extends BaseRepository<Country> {
    constructor(@InjectRepository(Country) private repository: Repository<Country>) {
        super(repository);
    }

    getQuerySet(): QuerySet<Country> {
        const queryBuilder = this.repository.createQueryBuilder("country");
        return new QuerySet(queryBuilder, "country");
    }
}
