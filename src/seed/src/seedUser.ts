import { User } from "src/modules/user/entities/user.entity";
import { userSeedData } from "../nonprod/user.seed";
import { Role } from "src/modules/role/entities/role.entity";

export const seedUser = async (db): Promise<void> => {
  try {
    const seedData = userSeedData;
    const count = seedData.length;
    if (!count) return;

    console.log("\x1b[33m%s\x1b[0m", `Seeding user (${count} user items)`);
    const userRepository = db.getRepository(User);
    const roleRepository = db.getRepository(Role);

    for (const data of seedData) {
      try {
        // Prvo pronađi role po ID-u iz ugnježdenog role objekta
        const role = await roleRepository.findOne({
          where: { id: data.role.id },
        });

        if (!role) {
          console.error(`Role with id ${data.role.id} not found`);
          continue;
        }

        let user = await userRepository.findOne({
          where: { id: data.id },
          relations: ["role"],
        });

        if (!user) {
          user = new User();
          const { role: roleData, ...userData } = data;
          Object.assign(user, {
            ...userData,
            role: role,
          });
          await userRepository.save(user);
          console.log(`Created new user: ${user.nickName}`);
        } else {
          console.log(`User ${user.nickName} already exists, skipping...`);
        }
      } catch (error) {
        console.error(`Error seeding user ${data.nickName}:`, error);
        throw error;
      }
    }
  } catch (error) {
    console.error("Error in seedUser:", error);
    throw error;
  }
};
