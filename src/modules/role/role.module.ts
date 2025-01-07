import { Module } from "@nestjs/common";
import { RoleService } from "./role.service";
import { RoleController } from "./role.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "./entities/role.entity";
import { ContextService } from "src/core/context/context.service";
import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { JwtHelper } from "src/helpers/jwt.helper";
import { User } from "../user/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Role, User])],
  controllers: [RoleController],
  providers: [RoleService, ContextService, AppConfigService, JwtHelper],
})
export class RoleModule {}
