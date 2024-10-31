import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JWTGuard } from "src/lib/guards/jwt.guard";
import { ApiOperation } from "@nestjs/swagger";
import { AdminGuard } from "src/lib/guards/admin.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JWTGuard)
  @Get("/me")
  @ApiOperation({
    summary: "Get data of currently logged in user",
    tags: ["auth"],
    description: "Get user object of currently logged in user",
  })
  async getMe() {
    return this.userService.getMe();
  }

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(AdminGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(id);
  }
}
