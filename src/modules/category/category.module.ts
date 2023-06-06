import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfigService } from 'src/core/appConfig/appConfig.service';
import { ContextService } from 'src/core/context/context.service';
import { Category } from './entities/category.entity';
import { User } from '../user/entities/user.entity';
import { JwtHelper } from 'src/helpers/jwt.helper';

@Module({
  imports: [TypeOrmModule.forFeature([Category,User])],
  controllers: [CategoryController],
  providers: [CategoryService,AppConfigService,ContextService,JwtHelper],
})
export class CategoryModule {}
