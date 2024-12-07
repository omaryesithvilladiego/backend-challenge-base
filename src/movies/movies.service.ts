import { Injectable } from "@nestjs/common";
import type { GetMovieDto } from "./dto/obtener-movie.dto";

@Injectable()
export class MoviesService {
  async findAll(options: GetMovieDto) {
    const { genres, popularity, page } = options;

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${!popularity ? "popularity.asc" : "popularity.desc"}&with_genres=${genres}`;

    try {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmZjZTUxNjc1MzI5YzdiYjMwZjQ1MWY1YjFjNTAzNSIsIm5iZiI6MTczMzMyNTkzNy4zMywic3ViIjoiNjc1MDc0NzE1Zjc0NGJmMTc0MWUwZDNjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PQO87_EBbHTh0sIB-_Q72qdcoI9HK_Yu1330spXqDdM";

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      return await fetch(url, options)
        .then((res) => res.json())
        .then((json) => json)
        .catch((err) => console.error(err));
    } catch (error) {
      throw error;
    }
  }

  async getPopularMovies() {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmZjZTUxNjc1MzI5YzdiYjMwZjQ1MWY1YjFjNTAzNSIsIm5iZiI6MTczMzMyNTkzNy4zMywic3ViIjoiNjc1MDc0NzE1Zjc0NGJmMTc0MWUwZDNjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PQO87_EBbHTh0sIB-_Q72qdcoI9HK_Yu1330spXqDdM",
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  }

  async findMovieByName(name: string) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmZjZTUxNjc1MzI5YzdiYjMwZjQ1MWY1YjFjNTAzNSIsIm5iZiI6MTczMzMyNTkzNy4zMywic3ViIjoiNjc1MDc0NzE1Zjc0NGJmMTc0MWUwZDNjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PQO87_EBbHTh0sIB-_Q72qdcoI9HK_Yu1330spXqDdM",
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  }
}
