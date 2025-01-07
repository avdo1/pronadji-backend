import { DataSourceOptions } from "typeorm";
import { config } from "dotenv";
import { User } from "../modules/user/entities/user.entity";
import { Role } from "../modules/role/entities/role.entity";
import { MainLocal } from "../modules/main-local/entities/main-local.entity";
import { Category } from "../modules/category/entities/category.entity";
import { Subcategory } from "../modules/subcategory/entities/subcategory.entity";
import { Product } from "../modules/product/entities/product.entity";
import { Payment } from "../modules/payments/entities/payment.entity";
import { Event } from "../modules/event/entities/event.entity";
import { DailyOffer } from "../modules/daily-offer/entities/daily-offer.entity";
import { Gallery } from "../modules/gallery/entities/gallery.entity";
import { Photo } from "../modules/photo/entities/photo.entity";
import { JobOffer } from "../modules/job-offer/entities/job-offer.entity";

config({ path: `${process.env.NODE_ENV || "development"}.env` });

export const databaseConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_DATABASE || "pronadji",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  entities: [User, Role, MainLocal, Category, Subcategory, Product, Payment, Event, DailyOffer, Gallery, Photo, JobOffer],
  migrations: ["dist/migrations/*.js"],
  synchronize: false,
  logging: true,
};
