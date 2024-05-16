/* eslint-disable @typescript-eslint/no-unused-vars */
import { Good } from 'src/goods/goods.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Category {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  name: string;

  @ManyToMany((type) => Good, (goods) => goods.categories) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  @JoinTable({
    //join таблица с названием category_good
    name: 'category_good',
    joinColumn: { name: 'category_id' }, //для связи с идентификатором автора
    inverseJoinColumn: { name: 'good_id' }, //для связи с идентификатором статьи
  })
  goods: Good[]; //объект, в котором будем автоматически получать все товары
}
