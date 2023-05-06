import { Module } from '@nestjs/common';
import { MainLocalService } from './main-local.service';
import { MainLocalController } from './main-local.controller';

@Module({
  controllers: [MainLocalController],
  providers: [MainLocalService]
})
export class MainLocalModule {}
