import { NestFactory } from '@nestjs/core';
import { Connection } from 'typeorm';
import { AppModule } from '../app.module';
import { seedUser } from './src/seedUser';
export const SEED_CONFIG = {
  otherPerUser: 5,
};
const seed = async () => {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  app.useLogger(null);
  const db = app.get<Connection>(Connection);
  await seedUser(db);
  
};

seed().then(
  () => process.exit(0),
  (err) => {
    console.error(err.stack);
    process.exit(1);
  },
);