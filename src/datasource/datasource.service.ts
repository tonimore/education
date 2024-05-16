import { Injectable } from '@nestjs/common';
import { Category } from 'src/categories/categories.entity';
import { Good } from 'src/goods/goods.entity';
import { Subscription } from 'src/subscription/subscription.entity';

@Injectable()
export class DatasourceService {
  private categories: Category[] = [];
  private goods: Good[] = [];
  private subscription: Subscription[] = [];

  getcategories(): Category[] {
    return this.categories;
  }

  getgoods(): Good[] {
    return this.goods;
  }

  getsubscription(): Subscription[] {
    return this.subscription;
  }
}
