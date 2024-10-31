import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { ContextService } from "src/core/context/context.service";
import { Category } from "./entities/category.entity";
import { User } from "../user/entities/user.entity";
import { JwtHelper } from "src/helpers/jwt.helper";
import { Product } from "../product/entities/product.entity";
import { ProductService } from "../product/product.service";

@Module({
  imports: [TypeOrmModule.forFeature([Category, User, Product])],
  controllers: [CategoryController],
  providers: [CategoryService, AppConfigService, ContextService, ProductService, JwtHelper],
})
export class CategoryModule {}
