import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import type { CreateUserDto } from "./dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import type { LoginDto } from "./dto/login.dto";

@Injectable()
export class UsersService {
  public constructor(
    private readonly jsonWebTokenService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  private hashPassword(password: string): Promise<string> {
    try {
      const saltRounds = 10;
      const hash = bcrypt.hashSync(password, saltRounds);
      return hash;
    } catch (error) {
      throw error;
    }
  }
  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;
    const hashPass = await this.hashPassword(password);
    try {
      const findUserByEmail = await this.userRepository.findOneBy({ email });
      if (findUserByEmail) throw new BadRequestException("El email se encuentra registrado");
      const userCreated = this.userRepository.create({
        email,
        password: hashPass,
      });
      const userSaved: User = await this.userRepository.save(userCreated);
      return userSaved;
    } catch (error: any) {
      throw error.message;
    }
  }

  async login(loginDto: LoginDto) {
    const { password, email } = loginDto;

    try {
      const userFound: User | null = await this.userRepository.findOneBy({ email });
      if (!userFound) throw new UnauthorizedException("Credenciales invalidas");
      const validatePassword: boolean = await bcrypt.compare(password, userFound.password);
      if (!validatePassword) throw new UnauthorizedException("Credenciales invalidas");
      const payload = {
        id: userFound.id,
        email: userFound.email,
      };

      const token = this.jsonWebTokenService.sign(payload);
      return {
        message: "Login exitoso",
        token,
      };
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }
}
