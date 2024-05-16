import { subscription } from './subscription.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable, HttpStatus } from '@nestjs/common';
@Injectable()
export class subscriptionService {
  constructor(private readonly datasourceService: DatasourceService) {}
  create(subscription: subscription) {
    this.datasourceService.getsubscription().push(subscription);
    return subscription;
  }
  findOne(id: number) {
    return this.datasourceService
      .getsubscription()
      .find((subscription) => subscription.id === id);
  }
  findAll(): subscription[] {
    return this.datasourceService.getsubscription();
  }
  update(id: number, updatedsubscription: subscription) {
    const index = this.datasourceService
      .getsubscription()
      .findIndex((subscription) => subscription.id === id);
    this.datasourceService.getsubscription()[index] = updatedsubscription;
    return this.datasourceService.getsubscription()[index];
  }
  remove(id: number) {
    const index = this.datasourceService
      .getsubscription()
      .findIndex((subscription) => subscription.id === id);
    this.datasourceService.getsubscription().splice(index, 1);
    return HttpStatus.OK;
  }
}
