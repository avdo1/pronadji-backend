import { Module } from '@nestjs/common';
import { MainLocalService } from './main-local.service';
import { MainLocalController } from './main-local.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainLocal } from './entities/main-local.entity';
import { JwtHelper } from 'src/helpers/jwt.helper';
import { AppConfigService } from 'src/core/appConfig/appConfig.service';
import { ContextService } from 'src/core/context/context.service';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainLocal,User,UserService])],
  controllers: [MainLocalController],
  providers: [MainLocalService,JwtHelper,AppConfigService,ContextService,Repository],
})
export class MainLocalModule {}
