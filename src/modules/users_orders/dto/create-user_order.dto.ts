import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserOrderDto { 

    @IsString()
    @IsNotEmpty()
    order_id: string;
}
