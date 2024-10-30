import { NestFactory } from "@nestjs/core";
import { DataSource, DataSourceOptions } from "typeorm";
import { seedUser } from "./src/seedUser";
import { seedRole } from "./src/seedRole";
import { seedCategory } from "./src/seedCategory";
import { seedSubcategory } from "./src/seedSubCategory";
import { seedMainLocal } from "./src/seedMainLocal";
import { seedProduct } from "./src/seedProduct";
import { config } from "dotenv";
config({ path: `${process.env.NODE_ENV}.env` });
import { AppModule } from "../app.module";
import { User } from "src/modules/user/entities/user.entity";
import { Role } from "src/modules/role/entities/role.entity";
import { MainLocal } from "src/modules/main-local/entities/main-local.entity";
import { Payment } from "src/modules/payments/entities/payment.entity";
import { Event } from "src/modules/event/entities/event.entity";
import { Product } from "src/modules/product/entities/product.entity";
import { Subcategory } from "src/modules/subcategory/entities/subcategory.entity";
import { JobOffer } from "src/modules/job-offer/entities/job-offer.entity";
import { Category } from "src/modules/category/entities/category.entity";
import { DailyOffer } from "src/modules/daily-offer/entities/daily-offer.entity";
import { Gallery } from "src/modules/gallery/entities/gallery.entity";
import { Photo } from "src/modules/photo/entities/photo.entity";

config();
export const SEED_CONFIG = {
  otherPerUser: 5,
};
const seed = async () => {
  await NestFactory.create(AppModule);

  const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "root",
    database: "postgres",
    port: 5432,
    entities: [User, Role, MainLocal, Payment, Event, Product, Subcategory, JobOffer, Category, Subcategory, DailyOffer, Gallery, Photo],
    migrations: ["dist/migrations/*.js"],
  };

  const dataSource = new DataSource(dataSourceOptions);
  await dataSource.initialize();

  await seedRole(dataSource);
  await seedCategory(dataSource);
  await seedMainLocal(dataSource);
  await seedSubcategory(dataSource);
  await seedProduct(dataSource);
  await seedUser(dataSource);
};

seed().then(
  () => process.exit(0),
  err => {
    console.error(err.stack);
    process.exit(1);
  },
);
