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
  // Konvertuj stringove u brojeve gdje je potrebno
  if (typeof config.PORT === "string") {
    config.PORT = parseInt(config.PORT, 10);
  }
  if (typeof config.DB_PORT === "string") {
    config.DB_PORT = parseInt(config.DB_PORT, 10);
  }

  // Postavi default vrijednosti samo ako ne postoje u env
  const defaultConfig = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 4000,
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_PORT: process.env.DB_PORT || 5432,
    DB_ENTITIES: process.env.DB_ENTITIES,
    DB_MIGRATIONS: process.env.DB_MIGRATIONS,
  };

  // Spoji konfiguracije, dajući prednost postojećim env varijablama
  const mergedConfig = { ...defaultConfig, ...config };

  console.log("Environment configuration:", {
    NODE_ENV: mergedConfig.NODE_ENV,
    DB_HOST: mergedConfig.DB_HOST,
    DB_DATABASE: mergedConfig.DB_DATABASE,
    DB_PORT: mergedConfig.DB_PORT,
  });

  const validatedConfig = plainToInstance(EnvironmentVariables, mergedConfig, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    console.error("Validation errors:", errors);
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
