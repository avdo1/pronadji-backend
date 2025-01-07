import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { DeepPartial, LessThan, MoreThanOrEqual, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "./entities/event.entity";
import { MainLocal } from "../main-local/entities/main-local.entity";

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
    @InjectRepository(MainLocal)
    private readonly mainLocalRepository: Repository<MainLocal>,
  ) {}
  async create(createEventDto: CreateEventDto) {
    const mainLocal = await this.mainLocalRepository.findOne({ where: { id: createEventDto.mainLocalId } });
    const event = this.repository.create({ ...createEventDto, mainLocal: mainLocal as DeepPartial<MainLocal> });
    return this.repository.save(event);
  }

  findAll() {
    return this.repository.createQueryBuilder("event").leftJoinAndSelect("event.mainLocal", "mainLocal").getMany();
  }

  async findActiveEventsByLocal(localId: string) {
    const mainLocal = await this.mainLocalRepository.findOne({ where: { id: localId } });
    const currentDate = new Date();
    return this.repository.find({ where: { mainLocal: mainLocal, entDate: MoreThanOrEqual(currentDate) } });
  }

  async findPassedEventsByLocal(localId: string) {
    const mainLocal = await this.mainLocalRepository.findOne({ where: { id: localId } });
    const currentDate = new Date();
    return this.repository.find({ where: { mainLocal: mainLocal, entDate: LessThan(currentDate) } });
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const backendEvent = await this.repository.findOne({ where: { id: id } });
    const updatedEventData = Object.assign(backendEvent, updateEventDto);
    return await this.repository.save(updatedEventData);
  }

  async remove(id: string) {
    const backendEvent = await this.repository.findOne({ where: { id: id } });
    return await this.repository.delete(backendEvent);
  }
}
