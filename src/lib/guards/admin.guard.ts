import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as _ from "lodash";
import { AppConfigService } from "../../core/appConfig/appConfig.service";
import { ContextService } from "../../core/context/context.service";
import { JwtHelper } from "../../helpers/jwt.helper";
import { AuthError } from "../errors/auth.error";
import { Repository } from "typeorm";
import { User } from "src/modules/user/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { RoleName } from "src/common/types/role.types";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly jwtHelper: JwtHelper,
    private readonly appConfigService: AppConfigService,
    private readonly contextService: ContextService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authHeader = request?.headers?.authorization;

    if (!authHeader) throw new HttpException("Not logged in", HttpStatus.UNAUTHORIZED);

    const token = this.jwtHelper.stripBearer(authHeader);

    const valid = this.jwtHelper.parseJwt(this.appConfigService.jwtKeys.secret, ["RS256"], token);

    const user = await this.repository.findOne({ where: { email: valid.sub as string }, relations: ["role", "mainLocals"] });

    if (!user) {
      throw new HttpException("User with this email not found", HttpStatus.NOT_FOUND);
    }

    request.user = { ..._.omit(user, "password") };
    this.contextService.userContext = { user: _.omit(user, "password") };

    if (user.role?.roleName !== RoleName.administrator && user.role?.roleName !== RoleName.mainAdministrator) {
      throw new HttpException("User is not an administrator or main administrator", HttpStatus.FORBIDDEN);
    }

    return true;
  }
}
