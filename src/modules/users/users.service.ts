import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService{

  constructor(private usersRepository: UsersRepository){}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.create(createUserDto)
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    return user;
  }

  async findById(userId: string) {
    const user = await this.usersRepository.findByEmail(userId);
    return user;
  }
}
