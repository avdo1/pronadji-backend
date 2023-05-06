import { Injectable } from '@nestjs/common';
import { CreatePhotographsPhotoDto } from './dto/create-photographs-photo.dto';
import { UpdatePhotographsPhotoDto } from './dto/update-photographs-photo.dto';

@Injectable()
export class PhotographsPhotoService {
  create(createPhotographsPhotoDto: CreatePhotographsPhotoDto) {
    return 'This action adds a new photographsPhoto';
  }

  findAll() {
    return `This action returns all photographsPhoto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photographsPhoto`;
  }

  update(id: number, updatePhotographsPhotoDto: UpdatePhotographsPhotoDto) {
    return `This action updates a #${id} photographsPhoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} photographsPhoto`;
  }
}
