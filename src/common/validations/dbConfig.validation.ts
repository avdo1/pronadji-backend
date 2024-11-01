import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Staging = 'staging',
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
  config.PORT = Number(config.PORT);
  config.DB_PORT = Number(config.DB_PORT);
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
