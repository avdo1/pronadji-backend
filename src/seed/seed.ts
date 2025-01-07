import { NestFactory } from "@nestjs/core";
import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "dotenv";
import { AppModule } from "../app.module";

// Entity imports
import { User } from "../modules/user/entities/user.entity";
import { Role } from "../modules/role/entities/role.entity";
import { MainLocal } from "../modules/main-local/entities/main-local.entity";
import { Payment } from "../modules/payments/entities/payment.entity";
import { Event } from "../modules/event/entities/event.entity";
import { Product } from "../modules/product/entities/product.entity";
import { Subcategory } from "../modules/subcategory/entities/subcategory.entity";
import { JobOffer } from "../modules/job-offer/entities/job-offer.entity";
import { Category } from "../modules/category/entities/category.entity";
import { DailyOffer } from "../modules/daily-offer/entities/daily-offer.entity";
import { Gallery } from "../modules/gallery/entities/gallery.entity";
import { Photo } from "../modules/photo/entities/photo.entity";

// Seed imports
import { seedUser } from "./src/seedUser";
import { seedRole } from "./src/seedRole";
import { seedCategory } from "./src/seedCategory";
import { seedSubcategory } from "./src/seedSubCategory";
import { seedMainLocal } from "./src/seedMainLocal";
import { seedProduct } from "./src/seedProduct";

// Učitaj env samo jednom
config({ path: `.${process.env.NODE_ENV || "development"}.env` });

const seed = async () => {
  try {
    const app = await NestFactory.create(AppModule);

    const dataSourceOptions: DataSourceOptions = {
      type: "postgres",
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: parseInt(process.env.DB_PORT || "5432", 10),
      entities: [User, Role, MainLocal, Payment, Event, Product, Subcategory, JobOffer, Category, DailyOffer, Gallery, Photo],
      migrations: ["dist/migrations/*.js"],
      logging: true,
    };

    const dataSource = new DataSource(dataSourceOptions);
    await dataSource.initialize();

    // Redoslijed je bitan zbog foreign key constraints
    await seedRole(dataSource);
    await seedUser(dataSource);
    await seedCategory(dataSource);
    await seedMainLocal(dataSource); // Pomjeren prije subcategory
    await seedSubcategory(dataSource);
    await seedProduct(dataSource);

    await app.close();
    console.log("Seeding completed successfully");
  } catch (error) {
    console.error("Seed error:", error);
    throw error;
  }
};

seed().then(
  () => process.exit(0),
  err => {
    console.error("Seed error:", err);
    process.exit(1);
  },
);
