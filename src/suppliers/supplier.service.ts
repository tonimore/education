import { Supplier } from './supplier.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Category } from 'src/categories/categories.entity';
import { In } from 'typeorm/find-options/operator/In';
import { Good } from 'src/goods/goods.entity';
import { IncompleteSupplierDto } from './dto/incomplete-supplier.dto';
import { CreateSupplierDto } from './dto/supplier-dto';

@Injectable()
export class suppliersService {
  constructor(
    @InjectRepository(Good)
    private readonly goodRepository: Repository<Good>,
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(supplierDto: CreateSupplierDto): Promise<Supplier> {
    //получаем объект CreatesupplierDto
    const supplier = this.supplierRepository.create(); //создаем объект Supplier из репозитория
    supplier.fullname = supplierDto.fullname; //заполняем поля объекта Supplier
    supplier.address = supplierDto.address;
    supplier.phone = supplierDto.phone;
    supplier.email = supplierDto.email;

    const goods = await this.goodRepository.findBy({
      //получаем массив товаров по id
      id: In(supplierDto.goods),
    });
    supplier.goods = goods;
    await this.goodRepository.save(supplier); //сохраняем объект Supplier в БД
    return supplier; //возвращаем объект Supplier
  }

  async findOne(id: number): Promise<Supplier> {
    return this.supplierRepository.findOne({
      //получаем объект Supplier по id
      where: { id }, //указываем условие поиска по id
      relations: { goods: true }, //получаем связанные объекты
    });
  }

  async findAll(): Promise<Supplier[]> {
    const suppliers = await this.supplierRepository.find({
      relations: { goods: true }, //получаем связанные объекты
    }); //получаем массив Supplier из БД
    return suppliers; //возвращаем массив Supplier
  }

  async findIncomplete(): Promise<IncompleteSupplierDto[]> {
    const suppliers = await this.supplierRepository.find(); //получаем массив Supplier из БД
    const incompleteSuppliers: IncompleteSupplierDto[] = suppliers.map(
      (supplier) => {
        //преобразуем массив Supplier в массив IncompleteSupplierDto
        const incompleteSupplier = new IncompleteSupplierDto();
        incompleteSupplier.id = supplier.id;
        incompleteSupplier.fullname = supplier.fullname;
        return incompleteSupplier;
      },
    );
    return incompleteSuppliers; //возвращаем массив IncompleteSupplierDto
  }

  async update(id: number, updatedSupplier: Supplier) {
    //получаем объект Good для обновления по id
    const supplier = await this.supplierRepository.findOne({ where: { id } }); //получаем объект Good по id из БД
    supplier.fullname = updatedSupplier.fullname; //обновляем поля объекта Supplier
    supplier.address = updatedSupplier.address;
    supplier.phone = updatedSupplier.phone;
    supplier.email = updatedSupplier.email;
    supplier.goods = updatedSupplier.goods;
    await this.supplierRepository.save(supplier); //сохраняем объект Supplier в БД
    return supplier; //возвращаем объект Supplier
  }

  remove(id: number) {
    this.supplierRepository.delete({ id }); //удаляем объект Supplier из БД
  }
}
