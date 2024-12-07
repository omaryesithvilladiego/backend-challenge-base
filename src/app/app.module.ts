import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/users.module";
import type { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import typeorm from "src/config/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { JWT_SECRET } from "src/helpers/enviroment";
import { MoviesModule } from "src/movies/movies.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
        const typeOrmConfig = configService.get<TypeOrmModuleOptions>("typeorm");
        if (!typeOrmConfig) {
          throw new Error("TypeORM configuration not found");
        }
        return typeOrmConfig;
      },
    }),
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: "1h",
      },
    }),
    MoviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
