import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditalService } from './edital.service';
import { EditalController } from './edital.controller';

@Module({
    controllers: [EditalController],
    providers: [EditalService, PrismaService],
})
export class EditalModule { }