import { CreateOrderDto } from "../dto/create-order.dto";
import { Order } from "../entities/order.entity";

export abstract class OrdersRepository{

    abstract create(createOrderDto:CreateOrderDto, userId : string): Promise<Order> | Order
    abstract requisition(orderId: string, userId: string): Promise<Order> | Order;
    abstract finalize(orderId : string, userId : string): Promise<Order> | Order;
    abstract findById(orderId : string): Promise<Order> | Order;
}