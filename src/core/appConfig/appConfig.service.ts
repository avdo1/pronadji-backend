import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigApiDocumentation, SMTPConfig } from './appConfig.interfaces';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  public get env(): string {
    return this.configService.get('ENV_NAME');
  }

  public get appUrl(): string {
    return this.configService.get('appUrl');
  }
 
  public get frontendAppUrl(): string {
    return this.configService.get('frontendAppUrl');
  }

  public get serverPort(): number {
    return parseInt(this.configService.get('serverPort'), 10) || 4000;
  }

  public get dbConfig() {
    return {
      host: this.configService.get('dbConfig.host'),
      port: Number(this.configService.get('dbConfig.port')),
      username: this.configService.get('dbConfig.username'),
      password: this.configService.get('dbConfig.password'),
      database: this.configService.get('dbConfig.database'),
      ssl: this.configService.get('dbConfig.ssl'),
      cache: this.configService.get('dbConfig.cache'),
      logging: false,
    };
  }

  public get isProductionZone(): boolean {
    return ['p', 'prd', 'prod', 'production', 'u', 'uat'].includes(this.env);
  }

  public get apiDocumentation(): ConfigApiDocumentation {
    return this.configService.get('apiDocumentation');
  }

  public get jwtKeys(): { secret: string; public: string } {
    return {secret:'pronadji-backend',public:"pronadji-backend"};
  }

  public get frontend() {
    return {
      url: this.configService.get('frontendAppUrl'),
    };
  }

  public get cors() {
    return this.configService.get('cors');
  }

  public get s3(): { bucketName: string; accessKeyId: string; secretAccessKey: string } {
    return this.configService.get('s3');
  }

  public get linkedInData() {
    return this.configService.get('linkedInData');
  }
  public get googleData(): {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scope: string[];
    passReqToCallback: boolean;
  } {
    return this.configService.get('googleData');
  }
  public get smtp(): SMTPConfig {
    return this.configService.get('smtp');
  }

  public get mailInfo() {
    return this.configService.get('mailInfo');
  }

  public get facebookData(): {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scope: string[];
    passReqToCallback: boolean;
  } {
    return this.configService.get('facebookData');
  }
}