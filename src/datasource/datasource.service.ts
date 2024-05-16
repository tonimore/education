import { Injectable } from '@nestjs/common';
import { Category } from 'src/categories/categories.entity';
import { Good } from 'src/goods/goods.entity';
import { Supplier } from 'src/suppliers/supplier.entity';

@Injectable()
export class DatasourceService {
  private categories: Category[] = [];
  private goods: Good[] = [];
  private suppliers: Supplier[];

  getcategories(): Category[] {
    return this.categories;
  }

  getgoods(): Good[] {
    return this.goods;
  }

  getsuppliers(): Supplier[] {
    return this.suppliers;
  }
}
