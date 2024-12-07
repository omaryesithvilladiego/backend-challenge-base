import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    description: "Email of the user",
    example: "user@example.com",
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    description: "Password of the user",
    example: "password123",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;
}
