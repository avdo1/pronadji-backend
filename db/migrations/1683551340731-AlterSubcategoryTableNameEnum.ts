import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterSubcategoryTableNameEnum1683551340731 implements MigrationInterface {
    name = 'AlterSubcategoryTableNameEnum1683551340731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subcategory" DROP COLUMN "name"`);
        await queryRunner.query(`CREATE TYPE "public"."subcategory_name_enum" AS ENUM('Kafa', 'Nargila')`);
        await queryRunner.query(`ALTER TABLE "subcategory" ADD "name" "public"."subcategory_name_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subcategory" DROP COLUMN "name"`);
        await queryRunner.query(`DROP TYPE "public"."subcategory_name_enum"`);
        await queryRunner.query(`ALTER TABLE "subcategory" ADD "name" text NOT NULL`);
    }

}
