import { Module } from '@nestjs/common';
import { DailyOfferService } from './daily-offer.service';
import { DailyOfferController } from './daily-offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyOffer } from './entities/daily-offer.entity';
import { User } from '../user/entities/user.entity';
import { AppConfigService } from 'src/core/appConfig/appConfig.service';
import { ContextService } from 'src/core/context/context.service';
import { JwtHelper } from 'src/helpers/jwt.helper';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DailyOffer,User])],
  controllers: [DailyOfferController],
  providers: [DailyOfferService,JwtHelper,AppConfigService,ContextService,Repository],
})
export class DailyOfferModule {}
