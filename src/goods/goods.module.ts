import { Module } from '@nestjs/common';
import { goodsService } from './goods.service';
import { goodsController } from './goods.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [goodsController],
  providers: [goodsService],
  imports: [DatasourceModule],
})
export class goodsModule {}
