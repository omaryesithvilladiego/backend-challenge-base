import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsBoolean, IsNumber } from "class-validator";

export class GetMovieDto {
  @ApiProperty({
    description: "Genres of the movie",
    example: "Action, Comedy",
    required: false,
  })
  @IsOptional()
  @IsString()
  genres?: string;

  @ApiProperty({
    description: "Popularity of the movie",
    example: true,
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  popularity?: boolean;

  @ApiProperty({
    description: "Page number for pagination",
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  page?: number;
}
