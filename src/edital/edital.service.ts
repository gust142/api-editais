import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EditalService {


    constructor(private prisma: PrismaService) { }
    async findAll(): Promise<any[]> {
        return await this.prisma.edital.findMany({
            select: {
                id: true,
                numero: true,
                ano: true,
                descricao: true,
                aberto: true,
                ong: {
                    select: {
                        id: true,
                        nome: true,
                        email: true
                    }
                },
                links: true
            }
        });
    }
    async findByYearAndOng(year: number, ong: number): Promise<any[]> {
        return await this.prisma.edital.findMany({
            where: {
                ano: year,
                ongId: ong
            },
            select: {
                id: true,
                numero: true,
                ano: true,
                descricao: true,
                aberto: true
            }
        });
    }
}
