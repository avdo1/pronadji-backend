import { RoleName } from "src/common/types/role.types";

export class CreateUserDto {
    firstName: string;
    lastName: string;
    nickName?: string;
    email: string;
    password: string;
    role: RoleName;
}