import { config } from "dotenv";

// Explicitly load development.env if NODE_ENV is not set
config({ path: `.${process.env.NODE_ENV || "development"}.env` });

export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  database: {
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT) || 5432,
    entities: [process.env.DB_ENTITIES || "dist/**/*.entity.js"],
    migrations: [process.env.DB_MIGRATIONS || "dist/migrations/*.js"],
  },
});
