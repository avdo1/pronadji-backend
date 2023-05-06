import { Module } from '@nestjs/common';
import { PhotographsPhotoService } from './photographs-photo.service';
import { PhotographsPhotoController } from './photographs-photo.controller';

@Module({
  controllers: [PhotographsPhotoController],
  providers: [PhotographsPhotoService]
})
export class PhotographsPhotoModule {}
