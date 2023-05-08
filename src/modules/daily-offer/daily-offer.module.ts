import { Module } from '@nestjs/common';
import { DailyOfferService } from './daily-offer.service';
import { DailyOfferController } from './daily-offer.controller';

@Module({
  controllers: [DailyOfferController],
  providers: [DailyOfferService],
})
export class DailyOfferModule {}
