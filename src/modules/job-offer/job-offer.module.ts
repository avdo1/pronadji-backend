import { Module } from "@nestjs/common";
import { JobOfferService } from "./job-offer.service";
import { JobOfferController } from "./job-offer.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobOffer } from "./entities/job-offer.entity";
import { User } from "../user/entities/user.entity";
import { JwtHelper } from "src/helpers/jwt.helper";
import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { ContextService } from "src/core/context/context.service";
import { Repository } from "typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([JobOffer, User])],
  controllers: [JobOfferController],
  providers: [JobOfferService, JwtHelper, AppConfigService, ContextService, Repository],
})
export class JobOfferModule {}
