import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from '../orders.repository';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { Order } from '../../entities/order.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class OrdersPrismaRepository implements OrdersRepository {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto : CreateOrderDto, userId: string): Promise<Order> {
    const order = new Order();

    Object.assign(order, {
      ...createOrderDto
    });
    
    const newOrder = await this.prisma.order.create({
      data: { 
        ...order, 
        start_service: new Date(),
        customerId: userId
      }
    });

    return newOrder;
  }

  async requisition(orderId: string, userId: string): Promise<Order> {

    const  user = await this.prisma.user.findUnique({where:{id:userId}})

    const findOrder = await this.prisma.order.findFirst({
      where:{topic:user.sector, service_requested: false}
    });

    if(!findOrder){
      throw new NotFoundException('Not exist open orders')
    }

    const updateUserOrder = await this.prisma.order.update({
      where:{id:orderId}
      ,data:{
        ...findOrder,
        service_requested:true,
        attendantId: user.id
      }})

    return plainToInstance(Order, updateUserOrder)
  }

  async finalize(orderId : string, userId: string): Promise<Order> {

    const newUserOrder = await this.prisma.order.update({
      where:{id:orderId, attendantId:userId},
      data:{end_service:new Date()}
    })

    return plainToInstance(Order, newUserOrder)
  }

  async findById(orderId : string): Promise<Order> {

    const newUserOrder = await this.prisma.order.update({
      where:{id:orderId},
      data:{end_service:new Date()}
    })

    return plainToInstance(Order, newUserOrder)
  }
}
