import { Module } from '@nestjs/common';
import { categoriesModule } from './categories/categories.module';
import { goodsModule } from './goods/goods.module';
import { supplierModule } from './suppliers/supplier.module';
import { DatasourceModule } from './datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    categoriesModule,
    DatasourceModule,
    goodsModule,
    supplierModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      database: 'education',
      username: 'education', //имя пользователя
      password: 'password', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: true, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
      entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
