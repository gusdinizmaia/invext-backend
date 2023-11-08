import { IsEnum, IsNotEmpty, IsString } from "class-validator"
import { iSectors } from "src/modules/users/entities/user.entity"

export class CreateOrderDto {

    @IsString()
    @IsNotEmpty()
    title : string

    @IsString()
    @IsNotEmpty()
    description : string

    @IsEnum(iSectors)
    @IsNotEmpty()
    topic : iSectors

}
