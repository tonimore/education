/* eslint-disable @typescript-eslint/no-unused-vars */
import { Good } from 'src/goods/goods.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('supplier')
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullname: string;
  @Column()
  address: number;
  @Column()
  phone: number;
  @Column()
  email: number;

  @ManyToMany((type) => Good, (goods) => goods.suppliers) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  @JoinTable({
    //join таблица с названием category_good
    name: 'supplier_good',
    joinColumn: { name: 'supplier_id' }, //для связи с идентификатором поставщиа
    inverseJoinColumn: { name: 'good_id' }, //для связи с идентификатором товара
  })
  goods: Good[]; //объект, в котором будем автоматически получать все товары
}
