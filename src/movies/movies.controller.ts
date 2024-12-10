import {
  Controller,
  Get,
  Param,
  Query,
  BadRequestException,
  UseInterceptors,
} from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { PopularityInterceptor } from "./interceptors/popularity.interceptor";

@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @UseInterceptors(PopularityInterceptor)
  async findAll(
    @Query("genres") genres: string = "",
    @Query("popularity") popularity: boolean = true,
    @Query("page") page: number = 1,
  ) {
    try {
      const response = await this.moviesService.findAll({ genres, popularity, page });
      if (!response) throw new BadRequestException("Hubo un error al obtener las peliculas");
      return response;
    } catch (error: any) {
      throw error.message;
    }
  }

  @Get("popular")
  async getPopularMovies() {
    try {
      return await this.moviesService.getPopularMovies();
    } catch (error) {
      throw error;
    }
  }

  @UseInterceptors(PopularityInterceptor)
  @Get(":name")
  async getMoviesByName(@Param("name") name: string) {
    try {
      return await this.moviesService.findMovieByName(name);
    } catch (error) {
      throw error;
    }
  }
}
