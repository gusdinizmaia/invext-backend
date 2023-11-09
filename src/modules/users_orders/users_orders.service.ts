import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserOrderDto } from './dto/create-user_order.dto';
import { UserOrdersRepository } from './repositories/users_orders.repository';
import { UsersService } from '../users/users.service';

@Injectable()
export class UserOrdersService {
  constructor(
    private userOrdersRepository: UserOrdersRepository,
    private usersService : UsersService
    ){}
  async create(createUserOrderDto: CreateUserOrderDto, userId : string) {

    const user = await this.usersService.findById(userId)

    if(!user.is_vendor){
      throw new UnauthorizedException('Unauthorized user!');
    }
    else if(user.treatments_completed.length >= 3){
      throw new UnauthorizedException('Maximum number of simultaneous calls reached!');
    }

    return this.userOrdersRepository.create(createUserOrderDto, userId)
  }

  async finalize(userOrderId : string) {

    const userOrder = await this.userOrdersRepository.findById(userOrderId)

    if(userOrder.vendorId !== userOrderId){
      throw new UnauthorizedException('Unauthorized user!');
    }

    return this.userOrdersRepository.finalize(userOrderId)
  }

}
