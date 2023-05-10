import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config({ path: `${process.env.NODE_ENV}.env` });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
