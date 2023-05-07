import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMainTables1683396392258 implements MigrationInterface {
    name = 'CreateMainTables1683396392258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "price" numeric NOT NULL, "description" text NOT NULL, "categoryId" uuid, "dailyOfferId" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."category_categoryname_enum" AS ENUM('Kafic', 'Nargila bar')`);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text NOT NULL, "categoryName" "public"."category_categoryname_enum" NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."daily_offer_status_enum" AS ENUM('Active', 'Inactive')`);
        await queryRunner.query(`CREATE TABLE "daily_offer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."daily_offer_status_enum" NOT NULL, "newPrice" numeric NOT NULL, "categoryId" uuid, "mainLocalId" uuid, CONSTRAINT "PK_a7cdd73410c2e13b25a0027bc1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."job_offer_status_enum" AS ENUM('Active', 'Inactive')`);
        await queryRunner.query(`CREATE TABLE "job_offer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "email" text NOT NULL, "description" text NOT NULL, "phone" text NOT NULL, "status" "public"."job_offer_status_enum" NOT NULL, "mainLocalId" uuid, CONSTRAINT "PK_5286026037ab5fb5acfcb7e1829" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "main_local" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "email" text NOT NULL, "phone" text NOT NULL, "location" text NOT NULL, "description" text NOT NULL, "workingHours" integer NOT NULL, "facebook" text NOT NULL, "instagram" text NOT NULL, "twitter" text NOT NULL, CONSTRAINT "PK_ba5663b5b7ffbca8ef77d747662" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gallery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "mainLocalId" uuid, "eventId" uuid, CONSTRAINT "PK_65d7a1ef91ddafb3e7071b188a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "description" text NOT NULL, "enterPrice" integer NOT NULL, "enterPriceConsumation" boolean NOT NULL, "startDate" date NOT NULL, "entDate" date NOT NULL, "startTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "endTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "mainLocalId" uuid, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."role_rolename_enum" AS ENUM('Main administrator', 'Administrator', 'User')`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "roleName" "public"."role_rolename_enum" NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" text NOT NULL, "lastName" text NOT NULL, "nickName" text NOT NULL, "email" text NOT NULL, "password" character varying NOT NULL, "roleId" integer, "mainLocalId" uuid, CONSTRAINT "REL_4c0d26178d16a0c1732a36d3f0" UNIQUE ("mainLocalId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fromDate" date NOT NULL, "toDate" date NOT NULL, "status" text NOT NULL, "paymentLevel" text NOT NULL, "userId" uuid, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photograph" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "photographDescription" text NOT NULL, "date" date NOT NULL, CONSTRAINT "PK_09dc19ca0f1e6591fd26f191524" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_1ba911b3ffba7e0ece301426476" FOREIGN KEY ("dailyOfferId") REFERENCES "daily_offer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "daily_offer" ADD CONSTRAINT "FK_3402080887157490f9e89ab7aed" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "daily_offer" ADD CONSTRAINT "FK_3486391740673046e04855e6e1d" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_offer" ADD CONSTRAINT "FK_32ccf4cbee5baa066c9b8222766" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gallery" ADD CONSTRAINT "FK_28d67801c2270faa8c98f079184" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gallery" ADD CONSTRAINT "FK_52f7381ee56eaf55091dd1aa93c" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_c33d1be1850755cb2633d6cc1ac" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4c0d26178d16a0c1732a36d3f0b" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_b046318e0b341a7f72110b75857" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_b046318e0b341a7f72110b75857"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4c0d26178d16a0c1732a36d3f0b"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_c33d1be1850755cb2633d6cc1ac"`);
        await queryRunner.query(`ALTER TABLE "gallery" DROP CONSTRAINT "FK_52f7381ee56eaf55091dd1aa93c"`);
        await queryRunner.query(`ALTER TABLE "gallery" DROP CONSTRAINT "FK_28d67801c2270faa8c98f079184"`);
        await queryRunner.query(`ALTER TABLE "job_offer" DROP CONSTRAINT "FK_32ccf4cbee5baa066c9b8222766"`);
        await queryRunner.query(`ALTER TABLE "daily_offer" DROP CONSTRAINT "FK_3486391740673046e04855e6e1d"`);
        await queryRunner.query(`ALTER TABLE "daily_offer" DROP CONSTRAINT "FK_3402080887157490f9e89ab7aed"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_1ba911b3ffba7e0ece301426476"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`DROP TABLE "photograph"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TYPE "public"."role_rolename_enum"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "gallery"`);
        await queryRunner.query(`DROP TABLE "main_local"`);
        await queryRunner.query(`DROP TABLE "job_offer"`);
        await queryRunner.query(`DROP TYPE "public"."job_offer_status_enum"`);
        await queryRunner.query(`DROP TABLE "daily_offer"`);
        await queryRunner.query(`DROP TYPE "public"."daily_offer_status_enum"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TYPE "public"."category_categoryname_enum"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
