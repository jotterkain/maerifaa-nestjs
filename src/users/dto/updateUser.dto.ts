import { IsDateString, IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  lastName?: string;
  @IsOptional()
  @IsString()
  firstName?: string;
  @IsOptional()
  @IsEmail()
  email?: string;
  @IsOptional()
  @IsPhoneNumber()
  phoneNumber?: string
  @IsOptional()
  @IsDateString()
  birthDate?: string;
  @IsOptional()
  @IsString()
  countryCode?: string;
  @IsOptional()
  @IsString()
  city?: string;
}