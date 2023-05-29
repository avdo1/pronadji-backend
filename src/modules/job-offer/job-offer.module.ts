import { Module } from '@nestjs/common';
import { JobOfferService } from './job-offer.service';
import { JobOfferController } from './job-offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOfferRepository } from './job-offer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([JobOfferRepository])],
  controllers: [JobOfferController],
  providers: [JobOfferService],
})
export class JobOfferModule {}
