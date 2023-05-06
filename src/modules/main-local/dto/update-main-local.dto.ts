import { PartialType } from '@nestjs/mapped-types';
import { CreateMainLocalDto } from './create-main-local.dto';

export class UpdateMainLocalDto extends PartialType(CreateMainLocalDto) {}
