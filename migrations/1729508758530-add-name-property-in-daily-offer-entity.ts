import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNamePropertyInDailyOfferEntity1729508758530 implements MigrationInterface {
    name = 'AddNamePropertyInDailyOfferEntity1729508758530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "daily_offer" ADD "name" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "daily_offer" DROP COLUMN "name"`);
    }

}
