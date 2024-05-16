import { Module } from '@nestjs/common';
import { categoriesModule } from './categories/categories.module';
import { goodsModule } from './goods/goods.module';
import { subscriptionModule } from './subscription/subscription.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [
    categoriesModule,
    DatasourceModule,
    goodsModule,
    subscriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
