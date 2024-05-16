import { Injectable } from '@nestjs/common';
import { categories } from 'src/categories/categories.entity';
import { goods } from 'src/goods/goods.entity';
import { subscription } from 'src/subscription/subscription.entity';

@Injectable()
export class DatasourceService {
  private categories: categories[] = [];
  private goods: goods[] = [];
  private subscription: subscription[] = [];

  getcategories(): categories[] {
    return this.categories;
  }

  getgoods(): goods[] {
    return this.goods;
  }

  getsubscription(): subscription[] {
    return this.subscription;
  }
}
