import { Module } from "@nestjs/common";
import { PhotographService } from "./photograph.service";
import { PhotographController } from "./photograph.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtHelper } from "src/helpers/jwt.helper";
import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { ContextService } from "src/core/context/context.service";
import { Photograph } from "./entities/photograph.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Photograph])],
  controllers: [PhotographController],
  providers: [PhotographService, ContextService, AppConfigService, JwtHelper],
})
export class PhotographModule {}
