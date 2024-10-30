import { PartialType } from "@nestjs/mapped-types";
import { CreatePhotographDto } from "./create-photograph.dto";

export class UpdatePhotographDto extends PartialType(CreatePhotographDto) {}
