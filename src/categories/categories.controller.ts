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

@Controller('categories')
export class categoriesController {
  constructor(private readonly categoriesService: categoriesService) {}
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updatecategories: Category) {
    return this.categoriesService.update(+id, updatecategories);
  }
  @Post()
  create(@Body() createcategories: Category) {
    return this.categoriesService.create(createcategories);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
