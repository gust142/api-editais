import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { OngController } from './ong/ong.controller';
import { OngService } from './ong/ong.service';
import { OngModule } from './ong/ong.module';
import { EditalModule } from './edital/edital.module';
import { EditalController } from './edital/edital.controller';
import { EditalService } from './edital/edital.service';
import { RecursoService } from './recurso/recurso.service';
import { RecursoController } from './recurso/recurso.controller';

@Module({
  imports: [PrismaModule, UsuarioModule, AuthModule, OngModule, EditalModule],
  controllers: [AppController, OngController, EditalController, RecursoController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    OngService,
    EditalService,
    RecursoService,
  ],
})
export class AppModule { }
