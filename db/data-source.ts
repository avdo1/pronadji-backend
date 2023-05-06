import { DataSource, DataSourceOptions } from "typeorm";


export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.dbHost,
    port: 5432,
    username: process.env.dbUsername,
    password: process.env.dbPassword,
    database: process.env.dbDatabase,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;