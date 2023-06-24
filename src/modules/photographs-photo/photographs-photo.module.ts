import { Module } from '@nestjs/common';
import { PhotographsPhotoService } from './photographs-photo.service';
import { PhotographsPhotoController } from './photographs-photo.controller';
import { ContextService } from 'src/core/context/context.service';
import { AppConfigService } from 'src/core/appConfig/appConfig.service';
import { JwtHelper } from 'src/helpers/jwt.helper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotographsPhoto } from './entities/photographs-photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotographsPhoto])],
  controllers: [PhotographsPhotoController],
  providers: [PhotographsPhotoService,ContextService,AppConfigService,JwtHelper],
})
export class PhotographsPhotoModule {}
