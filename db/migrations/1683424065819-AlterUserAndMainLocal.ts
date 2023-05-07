import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserAndMainLocal1683424065819 implements MigrationInterface {
    name = 'AlterUserAndMainLocal1683424065819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4c0d26178d16a0c1732a36d3f0b"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_4c0d26178d16a0c1732a36d3f0"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mainLocalId"`);
        await queryRunner.query(`ALTER TABLE "main_local" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "main_local" ADD CONSTRAINT "FK_fb1c744491c976f51ea62d3d2f9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "main_local" DROP CONSTRAINT "FK_fb1c744491c976f51ea62d3d2f9"`);
        await queryRunner.query(`ALTER TABLE "main_local" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mainLocalId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_4c0d26178d16a0c1732a36d3f0" UNIQUE ("mainLocalId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4c0d26178d16a0c1732a36d3f0b" FOREIGN KEY ("mainLocalId") REFERENCES "main_local"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
