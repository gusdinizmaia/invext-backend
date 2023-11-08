import {IsString, IsNotEmpty, IsEnum, IsBoolean, IsEmpty, IsOptional, Validate} from 'class-validator'
import {iSectors} from '../entities/user.entity'
import { Transform } from 'class-transformer';
import { hashSync } from 'bcryptjs';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEnum(iSectors)
    @IsOptional()
    sector: iSectors;

    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ['transform'],
      })
    password: string;

    @IsBoolean()
    @IsOptional()
    is_vendor:boolean;
}
