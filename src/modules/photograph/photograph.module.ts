import { Module } from '@nestjs/common';
import { PhotographService } from './photograph.service';
import { PhotographController } from './photograph.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotographRepository } from './photograph.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PhotographRepository])],
  controllers: [PhotographController],
  providers: [PhotographService],
})
export class PhotographModule {}
