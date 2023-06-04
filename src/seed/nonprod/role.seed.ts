import { RoleName } from "src/common/types/role.types";

export const roleSeedData = [
    {
      id: '00000000-0000-1000-a000-000000000001',
      roleName: RoleName.administrator,
    },
    {
      id: '00000000-0000-1000-a000-000000000002',
      roleName: RoleName.mainAdministrator, 
    },
    {
        id: '00000000-0000-1000-a000-000000000003',
        roleName: RoleName.user,
    },
   
  ];
  
  export type RoleSeedData = (typeof roleSeedData)[0];
  