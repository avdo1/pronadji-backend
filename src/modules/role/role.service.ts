import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly repository: Repository<Role>,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    const roleCreated = await this.repository.create(createRoleDto);
    if(!roleCreated)throw Error('Errpr');
    return await this.repository.save(roleCreated);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateRoleDto) {
    const roleFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    const updatedUser = Object.assign(roleFromDatabase, updateUserDto);
    return this.repository.update(id, updatedUser);
  }

  async remove(id: number) {
    const user = this.repository.findOne({ where: { id: id } });
    return await this.repository.delete(id);
  }
}
