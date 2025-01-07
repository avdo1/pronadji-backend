import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { AppConfigService } from "src/core/appConfig/appConfig.service";
import { ContextService } from "src/core/context/context.service";
import { JwtHelper } from "src/helpers/jwt.helper";
import { Repository } from "typeorm";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { Role } from "../role/entities/role.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [AuthController],
  providers: [AuthService, Repository, JwtHelper, ContextService, AppConfigService, UserService],
})
export class AuthModule {}
