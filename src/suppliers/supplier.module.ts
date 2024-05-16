import { Module } from '@nestjs/common';
import { supplierService } from './supplier.service';
import { supplierController } from './supplier.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Good } from 'src/goods/goods.entity';
import { Supplier } from 'src/suppliers/supplier.entity';

@Module({
  controllers: [supplierController],
  providers: [supplierService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Good, Supplier])],
})
export class supplierModule {}
