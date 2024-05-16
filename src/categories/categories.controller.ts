/* eslint-disable @typescript-eslint/no-unused-vars */
import { categoriesService } from './categories.service';
import { Category } from './categories.entity';
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

@Controller('categories')
@ApiTags('Категории') // Тег для документации
export class categoriesController {
  constructor(private readonly categoriesService: categoriesService) {}
  @ApiOperation({ summary: 'Список категорий' }) // Операция для Swagger
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }
  @ApiOperation({ summary: 'Чтение категории' }) // Операция для Swagger
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }
  @ApiOperation({ summary: 'Редактирование категории' }) // Операция для Swagger
  @Put(':id')
  update(@Param('id') id: string, @Body() updatecategories: Category) {
    return this.categoriesService.update(+id, updatecategories);
  }
  @ApiOperation({ summary: 'Создание категории' }) // Операция для Swagger
  @Post()
  create(@Body() createcategories: Category) {
    return this.categoriesService.create(createcategories);
  }
  @ApiOperation({ summary: 'Удаление категории' }) // Операция для Swagger
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
