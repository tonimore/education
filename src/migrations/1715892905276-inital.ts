import { MigrationInterface, QueryRunner } from "typeorm";

export class Inital1715892905276 implements MigrationInterface {
    name = 'Inital1715892905276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "goods" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "rating" integer NOT NULL, CONSTRAINT "PK_105e56546afe0823fa08df0baf7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplier" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "address" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_good" ("category_id" integer NOT NULL, "good_id" integer NOT NULL, CONSTRAINT "PK_d2075df1e5fe8222dbc216cdc7a" PRIMARY KEY ("category_id", "good_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f8ed8996ee26afe7d059c49cea" ON "category_good" ("category_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_4c251dbaf307d66eab5d2b395d" ON "category_good" ("good_id") `);
        await queryRunner.query(`CREATE TABLE "supplier_good" ("good_id" integer NOT NULL, "supplier_id" integer NOT NULL, CONSTRAINT "PK_99549ddd54b9b8606a36218e24a" PRIMARY KEY ("good_id", "supplier_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1270cfaf8e11b2d0b89a6e6eaa" ON "supplier_good" ("good_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_844f980b617b0a844fa0738d34" ON "supplier_good" ("supplier_id") `);
        await queryRunner.query(`ALTER TABLE "category_good" ADD CONSTRAINT "FK_f8ed8996ee26afe7d059c49cea5" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_good" ADD CONSTRAINT "FK_4c251dbaf307d66eab5d2b395d0" FOREIGN KEY ("good_id") REFERENCES "goods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "supplier_good" ADD CONSTRAINT "FK_1270cfaf8e11b2d0b89a6e6eaa8" FOREIGN KEY ("good_id") REFERENCES "goods"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "supplier_good" ADD CONSTRAINT "FK_844f980b617b0a844fa0738d346" FOREIGN KEY ("supplier_id") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supplier_good" DROP CONSTRAINT "FK_844f980b617b0a844fa0738d346"`);
        await queryRunner.query(`ALTER TABLE "supplier_good" DROP CONSTRAINT "FK_1270cfaf8e11b2d0b89a6e6eaa8"`);
        await queryRunner.query(`ALTER TABLE "category_good" DROP CONSTRAINT "FK_4c251dbaf307d66eab5d2b395d0"`);
        await queryRunner.query(`ALTER TABLE "category_good" DROP CONSTRAINT "FK_f8ed8996ee26afe7d059c49cea5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_844f980b617b0a844fa0738d34"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1270cfaf8e11b2d0b89a6e6eaa"`);
        await queryRunner.query(`DROP TABLE "supplier_good"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4c251dbaf307d66eab5d2b395d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f8ed8996ee26afe7d059c49cea"`);
        await queryRunner.query(`DROP TABLE "category_good"`);
        await queryRunner.query(`DROP TABLE "supplier"`);
        await queryRunner.query(`DROP TABLE "goods"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
