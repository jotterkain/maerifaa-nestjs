import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
  @IsOptional()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsPhoneNumber()
  phoneNumber?: string
  @IsNotEmpty()
  @IsDateString()
  birthDate: string;
  @IsNotEmpty()
  @IsString()
  countryCode: string;
  @IsNotEmpty()
  @IsString()
  city: string;
}