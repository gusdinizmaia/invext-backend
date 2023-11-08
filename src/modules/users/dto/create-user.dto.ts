import {IsString, IsNotEmpty, IsEnum, IsBoolean} from 'class-validator'
import {iSectors} from '../entities/user.entity'

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(iSectors)
    @IsNotEmpty()
    sector: iSectors;

    @IsBoolean()
    is_vendor:boolean;
}
