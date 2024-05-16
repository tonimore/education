import { Category } from './categories.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class categoriesService {
  constructor(private readonly datasourceService: DatasourceService) {}
  create(categories: Category) {
    this.datasourceService.getcategories().push(categories);

    return categories;
  }
  findOne(id: number) {
    const obj = this.datasourceService
      .getcategories()
      .find((categories) => categories.id === id);
    // Генерим ошибку
    if (obj === undefined) throw new NotFoundException('Object Not Found');
    return obj;
  }

  findAll(): Category[] {
    return this.datasourceService.getcategories();
  }

  update(id: number, updatedcategories: Category) {
    const index = this.datasourceService
      .getcategories()
      .findIndex((categories) => categories.id === id);
    // Генерим ошибку
    if (index == -1) throw new NotFoundException('Object Not Found');
    this.datasourceService.getcategories()[index] = updatedcategories;
    return this.datasourceService.getcategories()[index];
  }

  remove(id: number) {
    const index = this.datasourceService
      .getcategories()
      .findIndex((categories) => categories.id === id);
    // Генерим ошибку
    if (index == -1) throw new NotFoundException('Object Not Found');
    this.datasourceService.getcategories().splice(index, 1);
    return HttpStatus.OK;
  }
}
