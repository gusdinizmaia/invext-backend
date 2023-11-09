import { Injectable } from '@nestjs/common';
import { UserOrdersRepository } from '../users_orders.repository';
import { UserOrder } from '../../entities/users_order.entity';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserOrderDto } from '../../dto/create-user_order.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserOrdersPrismaRepository implements UserOrdersRepository {
  constructor(private prisma: PrismaService) {}
  async create(createUserOrderDto: CreateUserOrderDto, userId: string): Promise<UserOrder> {

    const user = await this.prisma.user.findUnique({where:{id:userId}})

    const findOrder = await this.prisma.order.findFirst({
      where:{topic:user.sector, is_activate: true}
    });

    const userOrder = new UserOrder();
    
    Object.assign(UserOrder, {
      ...findOrder,
      vendorId:userId,
      start_treatment:new Date()
    });

    const newUserOrder = await this.prisma.userOrder.create({data:{...userOrder}})

    return plainToInstance(UserOrder, newUserOrder)
  }
  async finalize(userOrderId : string): Promise<UserOrder> {

    const newUserOrder = await this.prisma.userOrder.update({
      where:{id:userOrderId},
      data:{end_treatment:new Date(), is_activate:false}
    })

    return plainToInstance(UserOrder, newUserOrder)
  }

  async findById(userOrderId : string): Promise<UserOrder> {

    const userOrder = await this.prisma.userOrder.findUnique({
      where:{id:userOrderId}
    })

    return plainToInstance(UserOrder, userOrder)
  }
}
