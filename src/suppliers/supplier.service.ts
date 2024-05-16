import { Supplier} from './supplier.entity';
//import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Category } from 'src/categories/categories.entity';
import { In } from 'typeorm/find-options/operator/In';
import { Good } from 'src/goods/goods.entity';
import { IncompletesupplierDto } from './dto/incomplete-supplier.dto';
import { CreatesupplierDto } from './dto/supplier-dto';

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

  async create(supplierDto: CreatesupplierDto): Promise<Supplier> {
    //получаем объект CreateGoodDto
    const supplier = this.supplierRepository.create(); //создаем объект Author из репозитория
    supplier.fullname = supplierDto.fullname; //заполняем поля объекта Author
    supplier.address = supplierDto.address;
    supplier.phone = supplierDto.phone;
    supplier.email = supplierDto.email;

    const goods = await this.goodRepository.findBy({
      //получаем массив категорий по id
      id: In(supplierDto.goods,
    });
    supplier.goods = goods;
    await this.goodRepository.save(supplier); //сохраняем объект Author в БД
    return supplier; //возвращаем объект Author
  }


  async findOne(id: number): Promise<Supplier> {
    return this.supplierRepository.findOne({
      //получаем объект Good по id
      where: { id }, //указываем условие поиска по id
      relations: { goods: true }, //получаем связанные объекты
    });
  }

  async findAll(): Promise<Supplier[]> {
    const suppliers = await this.supplierRepository.find({
      relations: { goods: true }, //получаем связанные объекты
    }); //получаем массив Author из БД
    return suppliers; //возвращаем массив Good
  }

  async findIncomplete(): Promise<IncompletesupplierDto[]> {
    const suppliers = await this.supplierRepository.find(); //получаем массив Good из БД
    const incompleteSuppliers: IncompletesupplierDto[] = suppliers.map((supplier) => {
      //преобразуем массив Good в массив IncompleteGoodDto
      const incompleteSupplier = new IncompletesupplierDto();
      incompleteSupplier.id = Supplier.id;
      incompleteSupplier.fullname = supplier.fullname;
      return incompleteSupplier;
    });
    return incompleteSuppliers; //возвращаем массив incompleteGoodDto
  }

  async update(id: number, updatedSupplier: Supplier) {
    //получаем объект Good для обновления по id
    const supplier = await this.supplierRepository.findOne({ where: { id } }); //получаем объект Good по id из БД
    supplier.fullname = updatedSupplier.fullname; //обновляем поля объекта Author
    supplier.address = updatedSupplier.address;
    supplier.phone = updatedSupplier.phone;
    supplier.email = updatedSupplier.email;
    supplier.goods = updatedSupplier.goods;

    await this.supplierRepository.save(supplier); //сохраняем объект Good в БД
    return supplier; //возвращаем объект Good
  }

  remove(id: number) {
    this.supplierRepository.delete({ id }); //удаляем объект Good из БД
  }
}
