import { Module } from "@nestjs/common";
import { PhotoService } from "./photo.service";
import { PhotoController } from "./photo.controller";
import { ContextService } from "src/core/context/context.service";
import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { JwtHelper } from "src/helpers/jwt.helper";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Photo } from "./entities/photo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [PhotoController],
  providers: [PhotoService, ContextService, AppConfigService, JwtHelper],
})
export class PhotoModule {}
