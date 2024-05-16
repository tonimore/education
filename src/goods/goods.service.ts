import { Good } from './goods.entity';
import { CreateGoodDto } from './dto/good-dto';
import { IncompleteGoodDto } from './dto/incomplete-good.dto';
//import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Supplier } from 'src/suppliers/supplier.entity';
import { Category } from 'src/categories/categories.entity';
import { In } from 'typeorm/find-options/operator/In';

@Injectable()
export class goodsService {
  constructor(
    @InjectRepository(Good)
    private readonly goodRepository: Repository<Good>,
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(goodDto: CreateGoodDto): Promise<Good> {
    //получаем объект CreateGoodDto
    const good = this.goodRepository.create(); //создаем объект Author из репозитория
    good.fullname = goodDto.fullname; //заполняем поля объекта Author
    good.rating = goodDto.rating;

    const categories = await this.categoryRepository.findBy({
      //получаем массив категорий по id
      id: In(goodDto.categories),
    });
    good.categories = categories;
    await this.goodRepository.save(good); //сохраняем объект Author в БД
    return good; //возвращаем объект Author
  }

  async findOne(id: number): Promise<Good> {
    return this.goodRepository.findOne({
      //получаем объект Good по id
      where: { id }, //указываем условие поиска по id
      relations: { categories: true, suppliers: true }, //получаем связанные объекты
    });
  }

  async findAll(): Promise<Good[]> {
    const goods = await this.goodRepository.find({
      relations: { categories: true, suppliers: true }, //получаем связанные объекты
    }); //получаем массив Author из БД
    return goods; //возвращаем массив Good
  }

  async findIncomplete(): Promise<IncompleteGoodDto[]> {
    const goods = await this.goodRepository.find(); //получаем массив Good из БД
    const incompleteGoods: IncompleteGoodDto[] = goods.map((good) => {
      //преобразуем массив Good в массив IncompleteGoodDto
      const incompleteGood = new IncompleteGoodDto();
      incompleteGood.id = good.id;
      incompleteGood.fullName = good.fullname;
      return incompleteGood;
    });
    return incompleteGoods; //возвращаем массив incompleteGoodDto
  }

  async update(id: number, updatedGood: Good) {
    //получаем объект Good для обновления по id
    const good = await this.goodRepository.findOne({ where: { id } }); //получаем объект Good по id из БД
    good.fullname = updatedGood.fullname; //обновляем поля объекта Author
    good.rating = updatedGood.rating;
    good.categories = updatedGood.categories;
    good.suppliers = updatedGood.suppliers;
    await this.goodRepository.save(good); //сохраняем объект Good в БД
    return good; //возвращаем объект Good
  }

  remove(id: number) {
    this.goodRepository.delete({ id }); //удаляем объект Good из БД
  }
}
