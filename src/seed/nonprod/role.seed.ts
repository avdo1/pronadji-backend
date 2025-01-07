import { RoleName } from "src/common/types/role.types";

export const roleSeedData = [
  {
    id: 1,
    roleName: RoleName.administrator,
  },
  {
    id: 3,
    roleName: RoleName.mainAdministrator,
  },
  {
    id: 2,
    roleName: RoleName.user,
  },
];

export type RoleSeedData = (typeof roleSeedData)[0];
