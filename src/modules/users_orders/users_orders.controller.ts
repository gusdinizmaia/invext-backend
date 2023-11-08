import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserOrdersService } from './users_orders.service';

@Controller('user-orders')
export class UserOrdersController {
  constructor(private readonly userOrdersService: UserOrdersService) {}

  @Put('')
  requisition() {
    return this.userOrdersService.requisition();
  }

  @Put(':user_order/finalize')
  finalize(@Param('user_order') userOrder : string) {
    return this.userOrdersService.finalize(userOrder);
  }

}
