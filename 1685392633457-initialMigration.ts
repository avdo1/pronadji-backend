import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685392633457 implements MigrationInterface {
    name = 'InitialMigration1685392633457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "categoryName"`);
        await queryRunner.query(`DROP TYPE "public"."category_categoryname_enum"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "categoryName" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job_offer" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."job_offer_status_enum"`);
        await queryRunner.query(`ALTER TABLE "job_offer" ADD "status" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subcategory" DROP COLUMN "name"`);
        await queryRunner.query(`DROP TYPE "public"."subcategory_name_enum"`);
        await queryRunner.query(`ALTER TABLE "subcategory" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "roleName"`);
        await queryRunner.query(`DROP TYPE "public"."role_rolename_enum"`);
        await queryRunner.query(`ALTER TABLE "role" ADD "roleName" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "daily_offer" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."daily_offer_status_enum"`);
        await queryRunner.query(`ALTER TABLE "daily_offer" ADD "status" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "daily_offer" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."daily_offer_status_enum" AS ENUM('Active', 'Inactive')`);
        await queryRunner.query(`ALTER TABLE "daily_offer" ADD "status" "public"."daily_offer_status_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "roleName"`);
        await queryRunner.query(`CREATE TYPE "public"."role_rolename_enum" AS ENUM('Main administrator', 'Administrator', 'User')`);
        await queryRunner.query(`ALTER TABLE "role" ADD "roleName" "public"."role_rolename_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subcategory" DROP COLUMN "name"`);
        await queryRunner.query(`CREATE TYPE "public"."subcategory_name_enum" AS ENUM('Kafa', 'Nargila')`);
        await queryRunner.query(`ALTER TABLE "subcategory" ADD "name" "public"."subcategory_name_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job_offer" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."job_offer_status_enum" AS ENUM('Active', 'Inactive')`);
        await queryRunner.query(`ALTER TABLE "job_offer" ADD "status" "public"."job_offer_status_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "categoryName"`);
        await queryRunner.query(`CREATE TYPE "public"."category_categoryname_enum" AS ENUM('Kafic', 'Nargila bar')`);
        await queryRunner.query(`ALTER TABLE "category" ADD "categoryName" "public"."category_categoryname_enum" NOT NULL`);
    }

}
