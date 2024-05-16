import { Module } from '@nestjs/common';
import { goodsService } from './goods.service';
import { goodsController } from './goods.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Good } from 'src/goods/goods.entity';
import { Supplier } from 'src/suppliers/supplier.entity';
import { Category } from 'src/categories/categories.entity';

@Module({
  controllers: [goodsController],
  providers: [goodsService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Good, Category, Supplier]),
  ],
})
export class goodsModule {}
