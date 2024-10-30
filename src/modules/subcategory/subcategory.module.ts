import { Module } from "@nestjs/common";
import { SubcategoryService } from "./subcategory.service";
import { SubcategoryController } from "./subcategory.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Subcategory } from "./entities/subcategory.entity";
import { ContextService } from "src/core/context/context.service";
import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { JwtHelper } from "src/helpers/jwt.helper";
import { User } from "../user/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Subcategory, User])],
  controllers: [SubcategoryController],
  providers: [SubcategoryService, ContextService, AppConfigService, JwtHelper],
})
export class SubcategoryModule {}
