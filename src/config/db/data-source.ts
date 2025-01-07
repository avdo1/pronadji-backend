import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "dotenv";

// Explicitly load development.env if NODE_ENV is not set
config({ path: `.${process.env.NODE_ENV || "development"}.env` });

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/migrations/*.js"],
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
