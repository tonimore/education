import { MigrationInterface, QueryRunner } from "typeorm";

export class Inital1715929613992 implements MigrationInterface {
    name = 'Inital1715929613992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "goods" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "rating" integer NOT NULL, CONSTRAINT "PK_105e56546afe0823fa08df0baf7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplier" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "address" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "goods_categories_categories" ("goodsId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_35a1ae1f206817aefa468d48f8a" PRIMARY KEY ("goodsId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9163358a86e92dfa8b9fa118e4" ON "goods_categories_categories" ("goodsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1899aaf7bb282e97a584268671" ON "goods_categories_categories" ("categoriesId") `);
        await queryRunner.query(`CREATE TABLE "goods_suppliers_supplier" ("goodsId" integer NOT NULL, "supplierId" integer NOT NULL, CONSTRAINT "PK_4c9c00f922e6ec0568fd0345d48" PRIMARY KEY ("goodsId", "supplierId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5f23f518bccb3c9a8922f59df7" ON "goods_suppliers_supplier" ("goodsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0d6e54e8dd72c30c907dbedeca" ON "goods_suppliers_supplier" ("supplierId") `);
        await queryRunner.query(`CREATE TABLE "supplier_goods_goods" ("supplierId" integer NOT NULL, "goodsId" integer NOT NULL, CONSTRAINT "PK_2879cfc11b4586494a5dac3d1ad" PRIMARY KEY ("supplierId", "goodsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d37893050187fd768ffb240043" ON "supplier_goods_goods" ("supplierId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1a2be66c21688ba9e2d9e8c281" ON "supplier_goods_goods" ("goodsId") `);
        await queryRunner.query(`ALTER TABLE "goods_categories_categories" ADD CONSTRAINT "FK_9163358a86e92dfa8b9fa118e4f" FOREIGN KEY ("goodsId") REFERENCES "goods"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "goods_categories_categories" ADD CONSTRAINT "FK_1899aaf7bb282e97a5842686712" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "goods_suppliers_supplier" ADD CONSTRAINT "FK_5f23f518bccb3c9a8922f59df7d" FOREIGN KEY ("goodsId") REFERENCES "goods"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "goods_suppliers_supplier" ADD CONSTRAINT "FK_0d6e54e8dd72c30c907dbedeca5" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "supplier_goods_goods" ADD CONSTRAINT "FK_d37893050187fd768ffb2400435" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "supplier_goods_goods" ADD CONSTRAINT "FK_1a2be66c21688ba9e2d9e8c2810" FOREIGN KEY ("goodsId") REFERENCES "goods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supplier_goods_goods" DROP CONSTRAINT "FK_1a2be66c21688ba9e2d9e8c2810"`);
        await queryRunner.query(`ALTER TABLE "supplier_goods_goods" DROP CONSTRAINT "FK_d37893050187fd768ffb2400435"`);
        await queryRunner.query(`ALTER TABLE "goods_suppliers_supplier" DROP CONSTRAINT "FK_0d6e54e8dd72c30c907dbedeca5"`);
        await queryRunner.query(`ALTER TABLE "goods_suppliers_supplier" DROP CONSTRAINT "FK_5f23f518bccb3c9a8922f59df7d"`);
        await queryRunner.query(`ALTER TABLE "goods_categories_categories" DROP CONSTRAINT "FK_1899aaf7bb282e97a5842686712"`);
        await queryRunner.query(`ALTER TABLE "goods_categories_categories" DROP CONSTRAINT "FK_9163358a86e92dfa8b9fa118e4f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1a2be66c21688ba9e2d9e8c281"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d37893050187fd768ffb240043"`);
        await queryRunner.query(`DROP TABLE "supplier_goods_goods"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0d6e54e8dd72c30c907dbedeca"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5f23f518bccb3c9a8922f59df7"`);
        await queryRunner.query(`DROP TABLE "goods_suppliers_supplier"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1899aaf7bb282e97a584268671"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9163358a86e92dfa8b9fa118e4"`);
        await queryRunner.query(`DROP TABLE "goods_categories_categories"`);
        await queryRunner.query(`DROP TABLE "supplier"`);
        await queryRunner.query(`DROP TABLE "goods"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
