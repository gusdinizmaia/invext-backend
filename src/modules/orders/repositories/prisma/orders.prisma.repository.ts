import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../orders.repository';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { Order } from '../../entities/order.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class OrdersPrismaRepository implements OrdersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateOrderDto, userId: string): Promise<Order> {
    const order = new Order();
    Object.assign(order, {
      ...data, 
    });

    const newOrder = await this.prisma.order.create({
      data: { ...order, clientId : userId }
    });

    return newOrder;
  }
}
