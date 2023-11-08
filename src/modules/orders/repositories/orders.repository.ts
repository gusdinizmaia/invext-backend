import { CreateOrderDto } from "../dto/create-order.dto";
import { Order } from "../entities/order.entity";

export abstract class OrdersRepository{

    abstract create(createOrderDto:CreateOrderDto, userId : string): Promise<Order> | Order
}