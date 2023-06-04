import { Injectable } from '@nestjs/common';
import { CreateJobOfferDto } from './dto/create-job-offer.dto';
import { UpdateJobOfferDto } from './dto/update-job-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobOffer } from './entities/job-offer.entity';
import { Repository } from 'typeorm';
import { DailyOffer } from '../daily-offer/entities/daily-offer.entity';

@Injectable()
export class JobOfferService {
  constructor(
    @InjectRepository(JobOffer)
    private readonly repository: Repository<DailyOffer>,
  ) {}
  async create(createJobOfferDto: CreateJobOfferDto) {
    return this.repository.create(createJobOfferDto);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateJobOfferDto: UpdateJobOfferDto) {
    const dailyOfferFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    const updatedJobOffer = Object.assign(dailyOfferFromDatabase, updateJobOfferDto);
    return this.repository.update(id, updatedJobOffer);
  }

  async remove(id: string) {
    const jobOffer = this.repository.findOne({ where: { id: id } });
    return await this.repository.delete(id);
  }
}
