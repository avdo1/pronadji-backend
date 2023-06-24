import { NestFactory } from '@nestjs/core';
import { DataSource, DataSourceOptions} from 'typeorm';
import { seedUser } from './src/seedUser';
import { seedRole } from './src/seedRole';
import { seedCategory } from './src/seedCategory';
import { seedSubcategory } from './src/seedSubCategory';
import { seedMainLocal } from './src/seedMainLocal';
import { seedProduct } from './src/seedProduct';
import { config } from 'dotenv';
config({ path: `${process.env.NODE_ENV}.env` });
import { AppModule } from '../app.module';
import { dotEnvOptions } from '../config/dotenv/dotenv.options';
import { User } from 'src/modules/user/entities/user.entity';

config();
export const SEED_CONFIG = {
  otherPerUser: 5,
};
const seed = async () => {
  const app = await NestFactory.create(AppModule);
  console.log(app)

  const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User],
    migrations: ['dist/migrations/*.{js,ts}'],
  };
  
  const dataSource = new DataSource(dataSourceOptions);
 

  // await seedRole(dataSource);
  // await seedCategory(dataSource);
  // await seedSubcategory(dataSource);
  // await seedMainLocal(dataSource);
  // await seedProduct(dataSource);
  await seedUser(dataSource);
  
};

seed().then(
  () => process.exit(0),
  (err) => {
    console.error(err.stack);
    process.exit(1);
  },
);