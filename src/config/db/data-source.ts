import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "dotenv";
config({ path: `${process.env.NODE_ENV}.env` });

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "postgres",
  port: 5432,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/migrations/*.js"],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
