import { Module } from '@nestjs/common';
import { suppliersService } from './supplier.service';
import { suppliersController } from './supplier.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Good } from 'src/goods/goods.entity';
import { Supplier } from 'src/suppliers/supplier.entity';
import { Category } from 'src/categories/categories.entity';

@Module({
  controllers: [suppliersController],
  providers: [suppliersService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Good, Supplier, Category]),
  ],
})
export class supplierModule {}
