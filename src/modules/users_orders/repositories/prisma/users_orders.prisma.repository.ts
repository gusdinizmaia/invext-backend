import { Injectable } from '@nestjs/common';
import { UserOrdersRepository } from '../users_orders.repository';
import { UserOrder } from '../../entities/users_order.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserOrdersPrismaRepository implements UserOrdersRepository {
  constructor(private prisma: PrismaService) {}
  async requisition(): Promise<UserOrder> {

    return
  }
  async finalize(): Promise<UserOrder> {

    return
  }
}
