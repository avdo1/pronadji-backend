import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeMainLocalPropertyInSubcategory1686068657725 implements MigrationInterface {
    name = 'ChangeMainLocalPropertyInSubcategory1686068657725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subcategory_main_locals_main_local" ("subcategoryId" uuid NOT NULL, "mainLocalId" uuid NOT NULL, CONSTRAINT "PK_f9752085e27b0ee3bb052d17f7e" PRIMARY KEY ("subcategoryId", "mainLocalId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4883330a6f8ee1a513c1fdfa84" ON "subcategory_main_locals_main_local" ("subcategoryId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ddb7aade0ee32e418b1ded3e2f" ON "subcategory_main_locals_main_local" ("mainLocalId") `);
        await queryRunner.query(`CREATE TABLE "main_local_subcategories_subcategory" ("mainLocalId" uuid NOT NULL, "subcategoryId" uuid NOT NULL, CONSTRAINT "PK_e56b4eb629f3ed738b9bbb74a9b" PRIMARY KEY ("mainLocalId", "subcategoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_67e3f9c148fa5130bbaa37e886" ON "main_local_subcategories_subcategory" ("mainLocalId") `);
        await queryRunner.query(`CREATE INDEX "IDX_af16c494a79653de51ed6a2535" ON "main_local_subcategories_subcategory" ("subcategoryId") `);
        await queryRunner.query(`ALTER TABLE "subcategory_main_locals_main_local" ADD CONSTRAINT "FK_4883330a6f8ee1a513c1fdfa844" FOREIGN KEY ("subcategoryId") REFERENCES "subcategory"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subcategory_main_locals_main_local" ADD CONSTRAINT "FK_ddb7aade0ee32e418b1ded3e2f4" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "main_local_subcategories_subcategory" ADD CONSTRAINT "FK_67e3f9c148fa5130bbaa37e8861" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "main_local_subcategories_subcategory" ADD CONSTRAINT "FK_af16c494a79653de51ed6a2535e" FOREIGN KEY ("subcategoryId") REFERENCES "subcategory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "main_local_subcategories_subcategory" DROP CONSTRAINT "FK_af16c494a79653de51ed6a2535e"`);
        await queryRunner.query(`ALTER TABLE "main_local_subcategories_subcategory" DROP CONSTRAINT "FK_67e3f9c148fa5130bbaa37e8861"`);
        await queryRunner.query(`ALTER TABLE "subcategory_main_locals_main_local" DROP CONSTRAINT "FK_ddb7aade0ee32e418b1ded3e2f4"`);
        await queryRunner.query(`ALTER TABLE "subcategory_main_locals_main_local" DROP CONSTRAINT "FK_4883330a6f8ee1a513c1fdfa844"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_af16c494a79653de51ed6a2535"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_67e3f9c148fa5130bbaa37e886"`);
        await queryRunner.query(`DROP TABLE "main_local_subcategories_subcategory"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ddb7aade0ee32e418b1ded3e2f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4883330a6f8ee1a513c1fdfa84"`);
        await queryRunner.query(`DROP TABLE "subcategory_main_locals_main_local"`);
    }

}
