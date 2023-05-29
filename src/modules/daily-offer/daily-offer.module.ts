import { Module } from '@nestjs/common';
import { DailyOfferService } from './daily-offer.service';
import { DailyOfferController } from './daily-offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyOfferRepository } from './daily-offer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DailyOfferRepository])],
  controllers: [DailyOfferController],
  providers: [DailyOfferService],
})
export class DailyOfferModule {}
