import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { RoleModule } from "./modules/role/role.module";
import { PaymentsModule } from "./modules/payments/payments.module";
import { CategoryModule } from "./modules/category/category.module";
import { MainLocalModule } from "./modules/main-local/main-local.module";
import { EventModule } from "./modules/event/event.module";
import { ProductModule } from "./modules/product/product.module";
import { DailyOfferModule } from "./modules/daily-offer/daily-offer.module";
import { JobOfferModule } from "./modules/job-offer/job-offer.module";
import { PhotoModule } from "./modules/photo/photo.module";
import { GalleryModule } from "./modules/gallery/gallery.module";
import { PhotographModule } from "./modules/photograph/photograph.module";
import { PhotographsPhotoModule } from "./modules/photographs-photo/photographs-photo.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubcategoryModule } from "./modules/subcategory/subcategory.module";
import { CustomConfigService } from "./config/config.service";
import { ConfigModule } from "@nestjs/config";
import CustomConfigModule from "./config/config.module";
import configuration from "./config/configuration";
import { validate } from "./common/validations/dbConfig.validation";
import * as path from "path";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    CustomConfigModule,
    ConfigModule.forRoot({
      envFilePath: path.join(process.cwd(), `${process.env.NODE_ENV}.env`),
      isGlobal: true,
      load: [configuration],
      validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (customConfigService: CustomConfigService) => customConfigService.getTypeORMDatabaseConfig(),
      inject: [CustomConfigService],
    }),
    UserModule,
    RoleModule,
    PaymentsModule,
    CategoryModule,
    MainLocalModule,
    EventModule,
    ProductModule,
    DailyOfferModule,
    JobOfferModule,
    PhotoModule,
    GalleryModule,
    PhotographModule,
    PhotographsPhotoModule,
    SubcategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
