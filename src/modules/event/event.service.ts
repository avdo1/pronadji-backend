import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}
  create(createEventDto: CreateEventDto) {
    return this.repository.create(createEventDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
