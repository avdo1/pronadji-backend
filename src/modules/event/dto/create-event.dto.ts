import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  public enterPrice: number;

  @IsNotEmpty()
  @IsBoolean()
  public enterPriceConsumation: boolean;

  @IsNotEmpty()
  @IsDate()
  public startDate: Date;

  @IsNotEmpty()
  @IsDate()
  public entDate: Date;

  @IsOptional()
  @IsDate()
  public startTime?: Date;

  @IsOptional()
  @IsDate()
  public endTime?: Date;

  @IsOptional()
  @IsUUID()
  public mainLocalId?: string;
}
