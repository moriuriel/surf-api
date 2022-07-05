import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { GeoPosition } from '../models/Beach';

export class CreateBeachDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  @IsEnum(GeoPosition)
  position: GeoPosition;
  @IsNumber()
  @IsNotEmpty()
  lat: number;
  @IsNumber()
  @IsNotEmpty()
  lng: number;
}
