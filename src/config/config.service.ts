import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DataSourceOptions } from "typeorm";

@Injectable()
export class CustomConfigService {
  constructor(private readonly config: ConfigService) {}

  public async getTypeORMDatabaseConfig(): Promise<DataSourceOptions> {
    const dbHost = this.config.get<string>("DB_HOST");
    const dbDatabase = this.config.get<string>("DB_DATABASE");
    const dbUsername = this.config.get<string>("DB_USERNAME");
    const dbPassword = this.config.get<string>("DB_PASSWORD");
    const dbPort = this.config.get<string>("DB_PORT");
    const dbMigrations = this.config.get<string>("DB_MIGRATIONS");
    const dbEntities = this.config.get<string>("DB_ENTITIES");

    return {
      type: "postgres",
      host: dbHost,
      username: dbUsername,
      password: dbPassword,
      database: dbDatabase,
      port: parseInt(dbPort || "5432", 10),
      entities: [dbEntities],
      migrations: [dbMigrations],
      synchronize: false, // za produkciju uvijek false
      logging: this.config.get<string>("NODE_ENV") === "development",
    };
  }
}
