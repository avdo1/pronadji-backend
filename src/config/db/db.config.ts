import { registerAs } from "@nestjs/config";
import * as path from "path";

const baseDir = path.join(__dirname, "../");
const entitiesPath = `${baseDir}${process.env.DB_ENTITIES}`;
const migrationPath = `${baseDir}${process.env.DB_MIGRATIONS}`;

export default registerAs("database", () => ({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "postgres",
  port: 5432,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/migrations/*.js"],
}));
