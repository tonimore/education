/* eslint-disable @typescript-eslint/no-unused-vars */
import { subscriptionService } from './subscription.service';
import { Subscription } from './subscription.entity';
import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Delete,
  Post,
} from '@nestjs/common';

@Controller('subscription')
export class subscriptionController {
  constructor(private readonly subscriptionService: subscriptionService) {}
  @Get()
  findAll() {
    return this.subscriptionService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updatesubscription: Subscription) {
    return this.subscriptionService.update(+id, updatesubscription);
  }
  @Post()
  create(@Body() createsubscription: Subscription) {
    return this.subscriptionService.create(createsubscription);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(+id);
  }
}
