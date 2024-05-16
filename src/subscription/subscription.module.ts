import { Module } from '@nestjs/common';
import { subscriptionService } from './subscription.service';
import { subscriptionController } from './subscription.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [subscriptionController],
  providers: [subscriptionService],
  imports: [DatasourceModule],
})
export class subscriptionModule {}
