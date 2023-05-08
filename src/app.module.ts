import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { CategoryModule } from './modules/category/category.module';
import { MainLocalModule } from './modules/main-local/main-local.module';
import { EventModule } from './modules/event/event.module';
import { ProductModule } from './modules/product/product.module';
import { DailyOfferModule } from './modules/daily-offer/daily-offer.module';
import { JobOfferModule } from './modules/job-offer/job-offer.module';
import { PhotoModule } from './modules/photo/photo.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { PhotographModule } from './modules/photograph/photograph.module';
import { PhotographsPhotoModule } from './modules/photographs-photo/photographs-photo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { SubcategoryModule } from './modules/subcategory/subcategory.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
