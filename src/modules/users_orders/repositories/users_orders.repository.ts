import { CreateUserOrderDto } from "../dto/create-user_order.dto";
import { UserOrder } from "../entities/users_order.entity";


export abstract class UserOrdersRepository{

    abstract create(createUserOrderDto: CreateUserOrderDto, userId): Promise<UserOrder> | UserOrder;
    abstract finalize(userOrderId : string): Promise<UserOrder> | UserOrder;
    abstract findById(userOrderId : string): Promise<UserOrder> | UserOrder;
}