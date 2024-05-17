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

@Entity('categories') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Category {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @ApiProperty({ example: 'Футбол', description: 'Название категории' })
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  name: string;

  @ManyToMany(() => Good, (good) => good.categories) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  goods: Good[]; //объект, в котором будем автоматически получать все товары
}
