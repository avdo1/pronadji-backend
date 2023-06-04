import { Injectable } from '@nestjs/common';
import { CreateDailyOfferDto } from './dto/create-daily-offer.dto';
import { UpdateDailyOfferDto } from './dto/update-daily-offer.dto';
import { DailyOffer } from './entities/daily-offer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DailyOfferService {
  constructor(
    @InjectRepository(DailyOffer)
    private readonly repository: Repository<DailyOffer>,
  ) {}
  async create(createdailyOfferDto: CreateDailyOfferDto) {
    return this.repository.create(createdailyOfferDto);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateDailyOfferDto: UpdateDailyOfferDto) {
    const dailyOfferFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    const updatedUser = Object.assign(dailyOfferFromDatabase, updateDailyOfferDto);
    return this.repository.update(id, updatedUser);
  }

  async remove(id: string) {
    const user = this.repository.findOne({ where: { id: id } });
    return await this.repository.delete(id);
  }
}
