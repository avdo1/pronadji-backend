import { Injectable } from '@nestjs/common';
import { CreateMainLocalDto } from './dto/create-main-local.dto';
import { UpdateMainLocalDto } from './dto/update-main-local.dto';

@Injectable()
export class MainLocalService {
  create(createMainLocalDto: CreateMainLocalDto) {
    return 'This action adds a new mainLocal';
  }

  findAll() {
    return `This action returns all mainLocal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mainLocal`;
  }

  update(id: number, updateMainLocalDto: UpdateMainLocalDto) {
    return `This action updates a #${id} mainLocal`;
  }

  remove(id: number) {
    return `This action removes a #${id} mainLocal`;
  }
}
