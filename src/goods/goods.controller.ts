/* eslint-disable @typescript-eslint/no-unused-vars */
import { goodsService } from './goods.service';
import { Good } from './goods.entity';
import { CreateGoodDto } from './dto/good-dto';
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

@Controller('goods')
@ApiTags('Товары') // Тег для документации
export class goodsController {
  constructor(private readonly goodsService: goodsService) {}
  @ApiOperation({ summary: 'Список товаров' }) // Операция для Swagger
  @Get()
  findAll() {
    return this.goodsService.findAll();
  }
  @ApiOperation({ summary: 'Чтение товара' }) // Операция для Swagger
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodsService.findOne(+id);
  }
  @ApiOperation({ summary: 'Неполное чтение товара' }) // Операция для Swagger
  @Get('incomplete')
  findIncomplete() {
    this.goodsService.findIncomplete();
  }
  @ApiOperation({ summary: 'Редактирование товара' }) // Операция для Swagger
  @Put(':id')
  update(@Param('id') id: string, @Body() updategoods: Good) {
    return this.goodsService.update(+id, updategoods);
  }
  @ApiOperation({ summary: 'Создание товара' }) // Операция для Swagger
  @Post()
  create(@Body() creategoods: CreateGoodDto) {
    return this.goodsService.create(creategoods);
  }
  @ApiOperation({ summary: 'Удаление товара' }) // Операция для Swagger
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodsService.remove(+id);
  }
}
