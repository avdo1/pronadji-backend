import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotographsPhotoDto } from './create-photographs-photo.dto';

export class UpdatePhotographsPhotoDto extends PartialType(
  CreatePhotographsPhotoDto,
) {}
