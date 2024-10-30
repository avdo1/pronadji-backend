import { User } from "../../modules/user/entities/user.entity";
import { userSeedData } from "../nonprod/user.seed";

export const seedUser = async (db): Promise<void> => {
  const seedData = userSeedData;
  const count = seedData.length;
  if (!count) {
    return;
  }
  console.log("\x1b[33m%s\x1b[0m", `Seeding user (${count} user items)`);
  const userRepository = db.getRepository(User);
  await Promise.all(
    seedData.map(async data => {
      let user = await userRepository.findOne({ where: { id: data.id } });
      if (!user) {
        user = new User();
      }
      user = Object.assign(data);
      return userRepository.save(user);
    }),
  );
};
