import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

export class PopularityInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((value) => {
        const responsibilities = value.results.map(
          (value: { popularity: any }) => value.popularity,
        );
        let maxPopularity = Math.max(...responsibilities);
        maxPopularity = Math.round(maxPopularity + maxPopularity * 0.2);

        value.results.map((movie: any) => {
          const popularityToPercent = (movie.popularity * 100) / maxPopularity;
          movie.popularity = Math.round(popularityToPercent);
        });
        return value;
      }),
    );
  }
}
