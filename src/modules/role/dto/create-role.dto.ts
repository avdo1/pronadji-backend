import { IsString } from "class-validator";
import { RoleName } from "src/common/types/role.types";

export class CreateRoleDto {
    @IsString()
    roleName:RoleName;
}
