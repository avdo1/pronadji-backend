import { RoleName } from "src/modules/role/dto/main-role.dto";

export class CreateUserDto {
    firstName: string;
    lastName: string;
    nickName?: string;
    email: string;
    password: string;
    role: RoleName;
}