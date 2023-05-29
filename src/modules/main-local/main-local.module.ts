import { Module } from '@nestjs/common';
import { MainLocalService } from './main-local.service';
import { MainLocalController } from './main-local.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainLocalRepository } from './main-local.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MainLocalRepository])],
  controllers: [MainLocalController],
  providers: [MainLocalService],
})
export class MainLocalModule {}
