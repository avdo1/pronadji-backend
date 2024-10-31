import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueParamsToSomeProperties1730229683746 implements MigrationInterface {
    name = 'AddUniqueParamsToSomeProperties1730229683746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "UQ_a6142dcc61f5f3fb2d6899fa264" UNIQUE ("roleName")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_f15a1d20dcbcde42b43563aaecb" UNIQUE ("nickName")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_f15a1d20dcbcde42b43563aaecb"`);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "UQ_a6142dcc61f5f3fb2d6899fa264"`);
    }

}
