import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto {
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
  password!: string;
}
