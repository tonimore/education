import { Category } from './categories.entity';
//import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Supplier } from 'src/suppliers/supplier.entity';
import { CreateCategoryDto } from 'src/categories/dto/category-dto';
import { Good } from 'src/goods/goods.entity';

@Injectable()
export class categoriesService {
  constructor(
    @InjectRepository(Good)
    private readonly goodRepository: Repository<Good>,
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(categoryDto: CreateCategoryDto): Promise<Category> {
    //получаем объект CreateGoodDto
    const category = this.categoryRepository.create(); //создаем объект Author из репозитория
    category.name = categoryDto.name; //заполняем поля объекта Category
    await this.categoryRepository.save(category); //сохраняем объект Category в БД
    return category; //возвращаем объект Category
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      //получаем объект Good по id
      where: { id }, //указываем условие поиска по id
      relations: { goods: true }, //получаем связанные объекты
    });
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryRepository.find({
      relations: { goods: true }, //получаем связанные объекты
    }); //получаем массив Author из БД
    return categories; //возвращаем массив Good
  }

  async update(id: number, updatedCategory: Category) {
    //получаем объект Good для обновления по id
    const category = await this.categoryRepository.findOne({ where: { id } }); //получаем объект Good по id из БД
    category.name = updatedCategory.name; //обновляем поля объекта Author
    category.goods = updatedCategory.goods;
    await this.categoryRepository.save(category); //сохраняем объект Good в БД
    return category; //возвращаем объект Good
  }

  remove(id: number) {
    this.categoryRepository.delete({ id }); //удаляем объект Good из БД
  }
}
