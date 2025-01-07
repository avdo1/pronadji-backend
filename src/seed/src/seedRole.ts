import { Role } from "src/modules/role/entities/role.entity";
import { roleSeedData } from "../nonprod/role.seed";

export const seedRole = async (db): Promise<void> => {
  try {
    const seedData = roleSeedData;
    const count = seedData.length;
    if (!count) return;

    console.log("\x1b[33m%s\x1b[0m", `Seeding role (${count} role items)`);
    const roleRepository = db.getRepository(Role);

    for (const data of seedData) {
      try {
        // Prvo provjeri da li role već postoji po roleName
        let existingRole = await roleRepository.findOne({
          where: { roleName: data.roleName },
        });

        if (!existingRole) {
          // Ako ne postoji, kreiraj novi
          const role = new Role();
          Object.assign(role, data);
          await roleRepository.save(role);
          console.log(`Created new role: ${data.roleName}`);
        } else {
          console.log(`Role ${data.roleName} already exists, skipping...`);
        }
      } catch (error) {
        console.error(`Error seeding role ${data.roleName}:`, error);
        throw error;
      }
    }
  } catch (error) {
    console.error("Error in seedRole:", error);
    throw error;
  }
};
