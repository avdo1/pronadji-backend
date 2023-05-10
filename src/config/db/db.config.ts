import { registerAs } from '@nestjs/config';
import * as path from 'path';

const baseDir = path.join(__dirname, '../');
const entitiesPath = `${baseDir}${process.env.DB_ENTITIES}`;
const migrationPath = `${baseDir}${process.env.DB_MIGRATIONS}`;

export default registerAs('database', () => ({
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number.parseInt(process.env.DB_PORT, 10),
  entities: [entitiesPath],
  migrations: [migrationPath],
}));
