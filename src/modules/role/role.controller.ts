import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { JWTGuard } from 'src/lib/guards/jwt.guard';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @UseGuards(JWTGuard)
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @UseGuards(JWTGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @UseGuards(JWTGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
