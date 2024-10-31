import dbConfigData from "./db/db.config";

export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  database: {
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "root",
    database: "postgres",
    port: 5432,
    entities: ["dist/**/*.entity.js"],
    migrations: ["dist/migrations/*.js"],
  },
});
