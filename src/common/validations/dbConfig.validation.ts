import { plainToInstance } from "class-transformer";
import { IsEnum, IsNumber, IsString, validateSync } from "class-validator";

enum Environment {
  Development = "development",
  Production = "production",
  Staging = "staging",
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;

  @IsNumber()
  DB_PORT: number;

  @IsString()
  DB_HOST: string;

  @IsString()
  DB_DATABASE: string;

  @IsString()
  DB_USERNAME: string;

  @IsString()
  DB_PASSWORD: string;

  @IsString()
  DB_MIGRATIONS: string;

  @IsString()
  DB_ENTITIES: string;
}

export function validate(config: Record<string, unknown>) {
  config.PORT = 4000;
  config.DB_PORT = 5432;

  const testObj = {
    DB_CONNECTION: "postgres",
    DB_HOST: "localhost",
    DB_USERNAME: "postgres",
    DB_PASSWORD: "root",
    DB_DATABASE: "postgres",
    DB_PORT: 5432,
    DB_ENTITIES: "dist/**/*.entity.js",
    DB_MIGRATIONS: "dist/migrations/*.js",
    PORT: 4000,
    ENV_PREFIX: "dev",
    NODE_ENV: "development",
  };

  config = { ...config, ...testObj };

  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  console.log("dbconfig.validation.ts===============================", validatedConfig);
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  console.log("dbconfig.validation.ts===============================errorr", errors);
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
