import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class CustomConfigService {
  constructor(private readonly config: ConfigService) {}

  public async getTypeORMDatabaseConfig(): Promise<DataSourceOptions> {
    const dbHost = this.config.get<string | null>('DB_HOST');
    const dbDatabase = this.config.get<string | null>('DB_DATABASE');
    const dbUsername = this.config.get<string | null>('DB_USERNAME');
    const dbPassword = this.config.get<string | null>('DB_PASSWORD');
    const dbMigrations = this.config.get<string | null>('DB_MIGRATIONS');
    const dbEntities = this.config.get<string | null>('DB_ENTITIES');

    return {
      type: 'postgres',
      host: dbHost,
      database: dbDatabase,
      username: dbUsername,
      password: dbPassword,
      migrations: [dbMigrations],
      entities: [dbEntities],
    };
  }
}
