import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @ApiProperty({
    description: "Unique identifier of the user",
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({
    description: "Email of the user",
    example: "user@example.com",
  })
  @Column({ unique: true })
  email?: string;

  @ApiProperty({
    description: "Password of the user",
    example: "password123",
  })
  @Column()
  password?: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
