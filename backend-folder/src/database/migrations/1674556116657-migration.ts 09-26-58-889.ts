import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1674556116657 implements MigrationInterface {
    name = 'migration1674556116657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`country\` ADD \`countryNumber\` float NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`country\` DROP COLUMN \`countryNumber\``);
    }

}
