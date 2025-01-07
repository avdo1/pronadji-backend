import { Module } from "@nestjs/common";
import { GalleryService } from "./gallery.service";
import { GalleryController } from "./gallery.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GalleryRepository } from "./gallery.repository";

@Module({
  imports: [TypeOrmModule.forFeature([GalleryRepository])],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
