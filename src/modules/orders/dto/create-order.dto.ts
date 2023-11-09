import { IsEnum, IsNotEmpty, IsString } from "class-validator"
import { iSectors } from "src/modules/users/entities/user.entity"
import { ApiProperty } from "@nestjs/swagger/dist";

export class CreateOrderDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title : string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description : string

    @ApiProperty()
    @IsEnum(iSectors)
    @IsNotEmpty()
    topic : iSectors

}
