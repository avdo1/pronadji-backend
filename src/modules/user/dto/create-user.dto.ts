
import { Role } from 'src/modules/role/entities/role.entity';

export class CreateUserDto {
  firstName: string;
  lastName: string;
  nickName?: string;
  email: string;
  password: string;
  roleId: string;
}
