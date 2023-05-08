import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSubcategoryTable1683550993558 implements MigrationInterface {
    name = 'CreateSubcategoryTable1683550993558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subcategory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "mainLocalId" uuid, CONSTRAINT "PK_5ad0b82340b411f9463c8e9554d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subcategory" ADD CONSTRAINT "FK_20fa670181e3229084683a3fbb3" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subcategory" DROP CONSTRAINT "FK_20fa670181e3229084683a3fbb3"`);
        await queryRunner.query(`DROP TABLE "subcategory"`);
    }

}
