import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {

  }

  async create(createUsuarioDto: CreateUserDto): Promise<User> {

    const existingUser = await this.findByEmail(createUsuarioDto.email)

    if (existingUser) {
      throw new BadRequestException('Email já cadastrado');
    }

    var data = {
      email: createUsuarioDto.email,
      password: await bcrypt.hash(createUsuarioDto.password, 10),
      name: createUsuarioDto.name
    }
    const usuarioCriado = await this.prisma.user.create({
      data: data
    });

    return {
      ...usuarioCriado,
      password: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
