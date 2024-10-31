import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { dotEnvOptions } from "./config/dotenv/dotenv.options";
import { config } from "dotenv";
import { ValidationPipe } from "@nestjs/common";
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      errorHttpStatusCode: 400,
    }),
  );
  app.enableCors();
  await app.listen(4000);
  console.log("***********************");
  console.log("*   PROJECT STARTED   *");
  console.log(`*   PORT: ${dotEnvOptions.port}        *`);
  console.log(`*   ENV: ${dotEnvOptions.envPrefix}          *`);
  console.log("***********************");
}
bootstrap();
