import { Module } from '@nestjs/common';
import { UserOrdersService } from './user_orders.service';
import { UserOrdersController } from './user_orders.controller';

@Module({
  controllers: [UserOrdersController],
  providers: [UserOrdersService],
})
export class UserOrdersModule {}
