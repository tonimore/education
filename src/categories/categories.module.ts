import { Module } from '@nestjs/common';
import { categoriesService } from './categories.service';
import { categoriesController } from './categories.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [categoriesController],
  providers: [categoriesService],
  imports: [DatasourceModule],
})
export class categoriesModule {}
