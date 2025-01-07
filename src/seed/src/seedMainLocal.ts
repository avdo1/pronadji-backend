import { MainLocal } from "src/modules/main-local/entities/main-local.entity";
import { mainLocalSeedData } from "../nonprod/mainLocal.seed";
import { User } from "src/modules/user/entities/user.entity";

export const seedMainLocal = async (db): Promise<void> => {
  try {
    const seedData = mainLocalSeedData;
    const count = seedData.length;
    if (!count) return;

    console.log("\x1b[33m%s\x1b[0m", `Seeding main local (${count} items)`);
    const mainLocalRepository = db.getRepository(MainLocal);
    const userRepository = db.getRepository(User);

    for (const data of seedData) {
      try {
        // Prvo pronađi usera
        const user = await userRepository.findOne({
          where: { id: data.user.id },
        });

        if (!user) {
          console.error(`User with id ${data.user.id} not found`);
          continue;
        }

        let mainLocal = await mainLocalRepository.findOne({
          where: { id: data.id },
          relations: ["user"],
        });

        if (!mainLocal) {
          mainLocal = new MainLocal();
          const { user: userData, ...mainLocalData } = data;
          Object.assign(mainLocal, {
            ...mainLocalData,
            user: user,
          });
          await mainLocalRepository.save(mainLocal);
          console.log(`Created new mainLocal: ${mainLocal.name}`);
        } else {
          console.log(`MainLocal ${mainLocal.name} already exists, skipping...`);
        }
      } catch (error) {
        console.error(`Error seeding mainLocal ${data.name}:`, error);
        throw error;
      }
    }
  } catch (error) {
    console.error("Error in seedMainLocal:", error);
    throw error;
  }
};
