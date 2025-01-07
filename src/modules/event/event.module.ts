import { Module } from "@nestjs/common";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "./entities/event.entity";
import { MainLocal } from "../main-local/entities/main-local.entity";
import { JwtHelper } from "src/helpers/jwt.helper";
import { User } from "../user/entities/user.entity";
import { ContextService } from "src/core/context/context.service";
import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { Repository } from "typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Event, MainLocal, JwtHelper, User])],
  controllers: [EventController],
  providers: [EventService, ContextService, JwtHelper, AppConfigService, Repository],
})
export class EventModule {}
