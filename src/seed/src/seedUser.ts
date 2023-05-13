import { User } from '../../modules/user/entities/user.entity';
import { UserRepository } from '../../modules/user/user.repository';
import bcrypt from 'bcrypt';
import { userSeedData } from '../nonprod/user.seed';

export const seedUser = async (db): Promise<void> => {
  const seedData = userSeedData;
  const count = seedData.length;
  if (!count) {
    return;
  }

  console.log('\x1b[33m%s\x1b[0m', `Seeding Users (${count} items)`);
  const repository: UserRepository = db.getCustomRepository(UserRepository);
  await Promise.all(
    seedData.map(async (data) => {
      let user = await repository.getUserById(data.id);
      if (!user) {
        user = new User();
      }
      const passwordHash = await bcrypt.hash(data.password, 12);

      Object.assign(user, { ...data, password: passwordHash });
      console.log('user', user);
      //return repository.save(user);
    }),
  );
}
