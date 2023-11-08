import { Injectable } from '@nestjs/common';
import { CreateUserOrderDto } from './dto/create-user_order.dto';
import { UpdateUserOrderDto } from './dto/update-user_order.dto';
import { UserOrdersRepository } from './repositories/users_orders.repository';

@Injectable()
export class UserOrdersService {
  constructor(private userOrdersRepository: UserOrdersRepository){}
  requisition() {
    return this.userOrdersRepository.requisition()
  }

  finalize(userOrderId : string) {
    return this.userOrdersRepository.finalize(userOrderId)
  }


}
