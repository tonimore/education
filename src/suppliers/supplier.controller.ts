/* eslint-disable @typescript-eslint/no-unused-vars */
import { supplierService } from './supplier.service';
import { Supplier } from './supplier.entity';
import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Delete,
  Post,
} from '@nestjs/common';

@Controller('supplier')
export class supplierController {
  constructor(private readonly supplierService: supplierService) {}
  @Get()
  findAll() {
    return this.supplierService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplierService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updatesupplier: Supplier) {
    return this.supplierService.update(+id, updatesupplier);
  }
  @Post()
  create(@Body() createsupplier: Supplier) {
    return this.supplierService.create(createsupplier);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierService.remove(+id);
  }
}
