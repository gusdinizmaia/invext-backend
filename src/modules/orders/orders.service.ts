import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './repositories/orders.repository';
import { UsersService } from '../users/users.service';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    private ordersRepository: OrdersRepository,
    private usersService : UsersService){}
  
  async create(createOrderDto: CreateOrderDto, userId : string) {
    return await this.ordersRepository.create(createOrderDto, userId);
  }

  async requisition(orderId: string, userId : string) {

    const user : any = await this.usersService.findById(userId)

    if(!user.is_attendant){
      throw new UnauthorizedException('Unauthorized user!');
    }
    else if(user.attendant_services.length >= 3){
      throw new UnauthorizedException('Maximum number of simultaneous calls reached!');
    }

    return this.ordersRepository.requisition(orderId, userId)
  }

  async finalize(orderId : string, userId: string) {

    const order : Order = await this.ordersRepository.findById(orderId)

    if(!order ){
      throw new UnauthorizedException('Order not found!');
    }
    else if(order.attendantId !== userId ){
      throw new UnauthorizedException('Unauthorized user!');
    }

    return this.ordersRepository.finalize(orderId, userId)
  }
}
