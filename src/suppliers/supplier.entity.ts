/* eslint-disable @typescript-eslint/no-unused-vars */
import { Good } from 'src/goods/goods.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('supplier')
export class Supplier {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ example: 'Адидас', description: 'Название поставщика' })
  @Column()
  fullname: string;
  @ApiProperty({
    example: 'ФРГ, Мюнхен, Уберштрассе 12',
    description: 'Адрес поставщика товара',
  })
  @Column()
  address: string;
  @ApiProperty({
    example: '+6(345)445-33-11',
    description: 'Телефон поставщика товара',
  })
  @Column()
  phone: string;
  @ApiProperty({
    example: 'sales@adidas.de',
    description: 'Адрес эл почты поставщика товара',
  })
  @Column()
  email: string;

  @ManyToMany((type) => Good, (goods) => goods.suppliers) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  @JoinTable({
    //join таблица с названием category_good
    name: 'supplier_good',
    joinColumn: { name: 'supplier_id' }, //для связи с идентификатором поставщиа
    inverseJoinColumn: { name: 'good_id' }, //для связи с идентификатором товара
  })
  goods: Good[]; //объект, в котором будем автоматически получать все товары
}
