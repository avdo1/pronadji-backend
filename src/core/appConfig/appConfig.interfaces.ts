import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export interface ConfigApiDocumentation {
  isEnabled: boolean;
  suffix: string;
}
export interface SMTPConfig {
  transport: {
    host: string;
    port: number;
    auth: {
      user: string;
      pass: string;
    };
    tls: {
      rejectUnauthorized: boolean;
    };
  };
  defaults: {
    from: string;
  };
  template: {
    dir: string;
    adapter: HandlebarsAdapter;
    options: {
      strict: boolean;
    };
  };
}