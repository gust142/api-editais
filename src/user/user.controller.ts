import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('usuario')
@IsPublic()
export class UserController {
  constructor(private readonly usuarioService: UserService) { }

  @Post()
  create(@Body() createUsuarioDto: CreateUserDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

}
