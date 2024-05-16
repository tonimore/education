import { Module } from '@nestjs/common';
import { categoriesService } from './categories.service';
import { categoriesController } from './categories.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Good } from 'src/goods/goods.entity';
import { Category } from 'src/categories/categories.entity';
import { Supplier } from 'src/suppliers/supplier.entity';

@Module({
  controllers: [categoriesController],
  providers: [categoriesService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Good, Category, Supplier]),
  ],
})
export class categoriesModule {}
