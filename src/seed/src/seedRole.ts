import { Role } from "src/modules/role/entities/role.entity";
import { roleSeedData } from "../nonprod/role.seed";


export const seedRole = async (db): Promise<void> => {
  const seedData = roleSeedData;
  const count = seedData.length;
  if (!count) {
    return;
  }
  console.log('\x1b[33m%s\x1b[0m', `Seeding  (${count} role items)`);
  // const roleRepository = db.getRepository(Role);
  // await Promise.all(
  //   seedData.map(async (data) => {
  //     let role = await roleRepository.findOne({ where: { id: data.id } });
  //     console.log('===', data);
  //     if (!role) {
  //        role= new (Role);
  //     }
  //     const roleItem = Object.assign(data);
      
  //   }),
  // );
}