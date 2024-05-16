/* eslint-disable @typescript-eslint/no-unused-vars */
import { suppliersService } from './supplier.service';
import { Supplier } from './supplier.entity';
import { CreateSupplierDto } from './dto/supplier-dto';
import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Delete,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('suppliers')
@ApiTags('Поставщики') // Тег для документации
export class suppliersController {
  suppliersServiceService: any;
  constructor(private readonly suppliersService: suppliersService) {}
  @ApiOperation({ summary: 'Список поставщиков' }) // Операция для Swagger
  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }
  @ApiOperation({ summary: 'Чтение поставщика' }) // Операция для Swagger
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suppliersService.findOne(+id);
  }
  @ApiOperation({ summary: 'Редактирование поставщика' }) // Операция для Swagger
  @Put(':id')
  update(@Param('id') id: string, @Body() updatesupplier: Supplier) {
    return this.suppliersService.update(+id, updatesupplier);
  }
  @ApiOperation({ summary: 'Создание поставщика' }) // Операция для Swagger
  @Post()
  create(@Body() createsuppliers: CreateSupplierDto) {
    return this.suppliersService.create(createsuppliers);
  }
  @ApiOperation({ summary: 'Удаление поставщика' }) // Операция для Swagger
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suppliersService.remove(+id);
  }
  @ApiOperation({ summary: 'Неполное чтение поставщика' }) // Операция для Swagger
  @Get('incomplete')
  findIncomplete() {
    this.suppliersService.findIncomplete();
  }
}
