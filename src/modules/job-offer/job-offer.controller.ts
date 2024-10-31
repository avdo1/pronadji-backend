import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { JobOfferService } from "./job-offer.service";
import { CreateJobOfferDto } from "./dto/create-job-offer.dto";
import { UpdateJobOfferDto } from "./dto/update-job-offer.dto";
import { AdminGuard } from "src/lib/guards/admin.guard";

@Controller("job-offer")
export class JobOfferController {
  constructor(private readonly jobOfferService: JobOfferService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createJobOfferDto: CreateJobOfferDto) {
    return this.jobOfferService.create(createJobOfferDto);
  }

  @Get()
  findAll() {
    return this.jobOfferService.findAll();
  }
  @Get("local/:id")
  findAllByLocalId(@Param("id") id: string) {
    return this.jobOfferService.findAllByLocalId(id);
  }
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.jobOfferService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateJobOfferDto: UpdateJobOfferDto) {
    return this.jobOfferService.update(id, updateJobOfferDto);
  }

  @UseGuards(AdminGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.jobOfferService.remove(id);
  }
}
