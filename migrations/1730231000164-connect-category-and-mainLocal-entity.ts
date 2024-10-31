import { MigrationInterface, QueryRunner } from "typeorm";

export class ConnectCategoryAndMainLocalEntity1730231000164 implements MigrationInterface {
    name = 'ConnectCategoryAndMainLocalEntity1730231000164'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "mainLocalId" uuid`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_5a904c239111998e54b6b1c14cf" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_5a904c239111998e54b6b1c14cf"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "mainLocalId"`);
    }

}
