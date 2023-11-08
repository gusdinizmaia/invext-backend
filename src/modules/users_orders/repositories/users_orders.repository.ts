import { CreateUserOrderDto } from "../dto/create-user_order.dto";
import { UserOrder } from "../entities/users_order.entity";


export abstract class UserOrdersRepository{

    abstract requisition(): Promise<UserOrder> | UserOrder;
    abstract finalize(userOrderId : string): Promise<UserOrder> | UserOrder;
}