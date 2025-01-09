import { DataSourceOptions } from "typeorm";
import { config } from "dotenv";
config({ path: `${process.env.NODE_ENV || "development"}.env` });

export const databaseConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrations: [process.env.DB_MIGRATIONS],
  synchronize: false,
  logging: true,
};
