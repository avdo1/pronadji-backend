import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.findOne(createUserDto.email);
  }
  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);
    if (user) return user;
    else throw error('Dont have');
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
