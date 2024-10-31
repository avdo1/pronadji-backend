import { MigrationInterface, QueryRunner } from "typeorm";

export class DropMainLocalIdPropertyFromSubctegoryEntity1730230433514 implements MigrationInterface {
    name = 'DropMainLocalIdPropertyFromSubctegoryEntity1730230433514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subcategory" DROP CONSTRAINT "FK_20fa670181e3229084683a3fbb3"`);
        await queryRunner.query(`ALTER TABLE "subcategory" DROP COLUMN "mainLocalId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subcategory" ADD "mainLocalId" uuid`);
        await queryRunner.query(`ALTER TABLE "subcategory" ADD CONSTRAINT "FK_20fa670181e3229084683a3fbb3" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
