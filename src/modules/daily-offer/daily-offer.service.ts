import { Injectable } from '@nestjs/common';
import { CreateDailyOfferDto } from './dto/create-daily-offer.dto';
import { UpdateDailyOfferDto } from './dto/update-daily-offer.dto';

@Injectable()
export class DailyOfferService {
  create(createDailyOfferDto: CreateDailyOfferDto) {
    return 'This action adds a new dailyOffer';
  }

  findAll() {
    return `This action returns all dailyOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyOffer`;
  }

  update(id: number, updateDailyOfferDto: UpdateDailyOfferDto) {
    return `This action updates a #${id} dailyOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyOffer`;
  }
}
