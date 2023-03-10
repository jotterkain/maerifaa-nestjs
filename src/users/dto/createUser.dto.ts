import { IsDateString, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @IsDateString()
  birthDate: string;
  @IsNotEmpty()
  @IsString()
  countryCode: string;
  @IsNotEmpty()
  @IsString()
  city: string;
}