import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { MainLocalService } from "./main-local.service";
import { CreateMainLocalDto } from "./dto/create-main-local.dto";
import { SearchMainLocalDto, UpdateMainLocalDto } from "./dto/update-main-local.dto";
import { AdminGuard } from "src/lib/guards/admin.guard";
import { AdminOfLocalGuard } from "src/lib/guards/adminOfLocal.guard";

@Controller("main-local")
export class MainLocalController {
  constructor(private readonly mainLocalService: MainLocalService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createMainLocalDto: CreateMainLocalDto) {
    return this.mainLocalService.create(createMainLocalDto);
  }

  @Get()
  findAll() {
    return this.mainLocalService.findAll();
  }

  @Get("/user/:id")
  findByUser(@Param("id") id: string) {
    return this.mainLocalService.findByUser(id);
  }
  @Get("/search/user")
  findBySearch(@Query() searchMainLocalDto: SearchMainLocalDto) {
    return this.mainLocalService.findBySearch(searchMainLocalDto);
  }
  @UseGuards(AdminOfLocalGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.mainLocalService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMainLocalDto: UpdateMainLocalDto) {
    return this.mainLocalService.update(id, updateMainLocalDto);
  }

  @UseGuards(AdminGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.mainLocalService.remove(id);
  }
}
