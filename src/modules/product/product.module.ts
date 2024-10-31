import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { ContextService } from "src/core/context/context.service";
import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { JwtHelper } from "src/helpers/jwt.helper";
import { User } from "../user/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Product, User])],
  controllers: [ProductController],
  providers: [ProductService, ContextService, AppConfigService, JwtHelper],
})
export class ProductModule {}
