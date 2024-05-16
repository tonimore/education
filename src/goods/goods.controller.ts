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

@Controller('goods')
export class goodsController {
  constructor(private readonly goodsService: goodsService) {}
  @Get()
  findAll() {
    return this.goodsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodsService.findOne(+id);
  }
  @Get('incomplete')
  findIncomplete() {
    this.goodsService.findIncomplete();
  }
  @Get(':id')
  findByCategory(@Param('id') id: string) {
    return this.goodsService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updategoods: Good) {
    return this.goodsService.update(+id, updategoods);
  }
  @Post()
  create(@Body() creategoods: CreateGoodDto) {
    return this.goodsService.create(creategoods);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodsService.remove(+id);
  }
}
