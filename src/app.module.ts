import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { UsersOrdersModule } from './modules/users_orders/users_orders.module';
import { AuthModule } from './modules/auth/auth.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [UsersModule, UsersOrdersModule,OrdersModule ,AuthModule ]
})
export class AppModule {}
