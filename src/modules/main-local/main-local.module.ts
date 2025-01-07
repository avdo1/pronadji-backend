import { Module } from "@nestjs/common";
import { MainLocalService } from "./main-local.service";
import { MainLocalController } from "./main-local.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MainLocal } from "./entities/main-local.entity";
import { JwtHelper } from "src/helpers/jwt.helper";
import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { ContextService } from "src/core/context/context.service";
import { User } from "../user/entities/user.entity";
import { SubcategoryService } from "../subcategory/subcategory.service";
import { Subcategory } from "../subcategory/entities/subcategory.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MainLocal, User, Subcategory])],
  controllers: [MainLocalController],
  providers: [MainLocalService, JwtHelper, AppConfigService, ContextService, SubcategoryService],
})
export class MainLocalModule {}
