import { Module } from '@nestjs/common';
import { OngService } from './ong.service';
import { OngController } from './ong.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [OngController],
    providers: [OngService, PrismaService],
})
export class OngModule { }