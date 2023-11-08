import { Module } from '@nestjs/common';
import { UserOrdersService } from './users_orders.service';
import { UserOrdersController } from './users_orders.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UserOrdersRepository } from './repositories/users_orders.repository';
import { UserOrdersPrismaRepository } from './repositories/prisma/users_orders.prisma.repository';

@Module({
  controllers: [UserOrdersController],
  providers: [UserOrdersService, PrismaService, {
    provide:UserOrdersRepository, useClass:UserOrdersPrismaRepository
  }],
})
export class UsersOrdersModule {}
