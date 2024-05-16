import { Supplier } from './supplier.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class supplierService {
  constructor(private readonly datasourceService: DatasourceService) {}
  create(supplier: Supplier) {
    this.datasourceService.getsupplier().push(supplier);
    return supplier;
  }
  findOne(id: number) {
    return this.datasourceService
      .getsupplier()
      .find((supplier) => supplier.id === id);
  }
  findAll(): Supplier[] {
    return this.datasourceService.getsupplier();
  }
  update(id: number, updatesupplier: Supplier) {
    const index = this.datasourceService
      .getsupplier()
      .findIndex((subscription) => subscription.id === id);
    this.datasourceService.getsupplier()[index] = updatesupplier;
    return this.datasourceService.getsupplier()[index];
  }
  remove(id: number) {
    const index = this.datasourceService
      .getsupplier()
      .findIndex((supplier) => supplier.id === id);
    this.datasourceService.getsupplier().splice(index, 1);
    return HttpStatus.OK;
  }
}
