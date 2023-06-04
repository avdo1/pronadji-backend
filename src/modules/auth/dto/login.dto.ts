import { IsBoolean, IsEmail, IsString } from "class-validator";
import { RoleName } from "src/common/types/role.types";

export class LoginDto {
    @IsEmail()
    email:string
    @IsString()
    password:string
    @IsBoolean()
    isRegularLogin:boolean
}

export class SignUpDto {
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;

    @IsString()
    confirmPassword: string;

    @IsString()
    username:string;
}