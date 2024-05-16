/* eslint-disable @typescript-eslint/no-unused-vars */
import { suppliersService} from './supplier.service';
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

@Controller('suppliers')
export class suppliersController {
  suppliersServiceService: any;
  constructor(private readonly suppliersService: suppliersService) {}
  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suppliersService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updatesupplier: Supplier) {
    return this.suppliersService.update(+id, updatesupplier);
  }
  @Post()
  create(@Body() createsuppliers: Supplier) {
    return this.suppliersService.create(createsuppliers);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suppliersService.remove(+id);
  }

  @Get('incomplete')
  findIncomplete() {
    this.suppliersService.findIncomplete();
  }
}