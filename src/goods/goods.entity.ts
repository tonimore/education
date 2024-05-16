/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category } from 'src/categories/categories.entity';
import { Supplier } from 'src/suppliers/supplier.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('goods')
export class Good {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullname: string;
  @Column()
  rating: number;
  @ManyToMany((type) => Category, (categories) => categories.goods)
  @JoinTable({
    name: 'category_good',
    joinColumn: { name: 'good_id' },
    inverseJoinColumn: { name: 'category_id' },
  })
  @ManyToMany((type) => Supplier, (suppliers) => suppliers.goods)
  @JoinTable({
    name: 'supplier_good',
    joinColumn: { name: 'good_id' },
    inverseJoinColumn: { name: 'supplier_id' },
  })
  categories: Category[];
  suppliers: Supplier[];
}
