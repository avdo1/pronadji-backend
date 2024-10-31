import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { AdminGuard } from "src/lib/guards/admin.guard";

@Controller("event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    const response = this.eventService.create(createEventDto);
    return response;
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get("/active/:localId")
  findActiveEventsByLocal(@Param("localId") localId: string) {
    return this.eventService.findActiveEventsByLocal(localId);
  }

  @Get("/passed/:localId")
  findPassedEventsByLocal(@Param("localId") localId: string) {
    return this.eventService.findPassedEventsByLocal(localId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  @UseGuards(AdminGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(id);
  }
}
