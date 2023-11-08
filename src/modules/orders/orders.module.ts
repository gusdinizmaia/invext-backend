import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/database/prisma.service';
import { OrdersRepository } from './repositories/orders.repository';
import { OrdersPrismaRepository } from './repositories/prisma/orders.prisma.repository';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService,{
    provide:OrdersRepository, useClass:OrdersPrismaRepository
  }],
})
export class OrdersModule {}
