import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Request, UseGuards } from '@nestjs/common';
import { UserOrdersService } from './users_orders.service';
import { CreateUserOrderDto } from './dto/create-user_order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users_orders')
export class UserOrdersController {
  constructor(private readonly userOrdersService: UserOrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  create(@Body() createUserOrderDto:CreateUserOrderDto, @Request() req) {
    return this.userOrdersService.create(createUserOrderDto, req.user.id);
  }

  @Put(':user_order/finalize')
  finalize(@Param('user_order') userOrder : string) {
    return this.userOrdersService.finalize(userOrder);
  }

}
