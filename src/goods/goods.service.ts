import { goods } from './goods.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
@Injectable()
export class goodsService {
  constructor(private readonly datasourceService: DatasourceService) {}
  create(goods: goods) {
    this.datasourceService.getgoods().push(goods);
    return goods;
  }
  findOne(id: number) {
    const obj = this.datasourceService
      .getgoods()
      .find((goods) => goods.id === id);
    // Генерим ошибку
    if (obj === undefined) throw new NotFoundException('Object Not Found');
    return obj;
  }
  findAll(): goods[] {
    return this.datasourceService.getgoods();
  }
  update(id: number, updatedgoods: goods) {
    const index = this.datasourceService
      .getgoods()
      .findIndex((goods) => goods.id === id);
    // Генерим ошибку
    if (index == -1) throw new NotFoundException('Object Not Found');
    this.datasourceService.getgoods()[index] = updatedgoods;
    return this.datasourceService.getgoods()[index];
  }
  filterByCategory(categoryId: number) {
    return this.datasourceService
      .getgoods()
      .filter((good) => good.category_id === categoryId);
  }
  remove(id: number) {
    const index = this.datasourceService
      .getgoods()
      .findIndex((goods) => goods.id === id);
    // Генерим ошибку
    if (index == -1) throw new NotFoundException('Object Not Found');
    this.datasourceService.getgoods().splice(index, 1);
    return HttpStatus.OK;
  }
}
