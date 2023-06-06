import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { ContextService } from 'src/core/context/context.service';
import { AppConfigService } from 'src/core/appConfig/appConfig.service';
import { JwtHelper } from 'src/helpers/jwt.helper';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment,User])],
  controllers: [PaymentsController],
  providers: [PaymentsService,ContextService,AppConfigService,JwtHelper],
})
export class PaymentsModule {}
