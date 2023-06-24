import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ContextService } from 'src/core/context/context.service';
import { AppConfigService } from 'src/core/appConfig/appConfig.service';
import { JwtHelper } from 'src/helpers/jwt.helper';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserService])],
  controllers: [UserController],
  providers: [UserService,ContextService,AppConfigService,JwtHelper],
})
export class UserModule {}
