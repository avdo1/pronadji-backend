import { DataSourceOptions } from "typeorm";
import { config } from "dotenv";
config({ path: `${process.env.NODE_ENV || "development"}.env` });

export const databaseConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_DATABASE || "pronadji",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrations: ["dist/migrations/*.js"],
  synchronize: false,
  logging: true,
};
