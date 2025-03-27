import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { UpdateEditalDto } from './dto/update-edital.dto';

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
    async create(createEditalDto: CreateEditalDto): Promise<any> {
        const edital = await this.prisma.edital.create({
            data: {
                numero: createEditalDto.numero,
                ano: createEditalDto.ano,
                descricao: createEditalDto.descricao,
                aberto: createEditalDto.aberto,
                ongId: createEditalDto.ongId
            }
        })
        return {
            message: 'Edital criado com sucesso',
            edital: { ...edital }
        };
    }
    async update(updateEditalDto: UpdateEditalDto): Promise<any> {
        const edital = await this.prisma.edital.update({
            data: {
                numero: updateEditalDto.numero,
                ano: updateEditalDto.ano,
                descricao: updateEditalDto.descricao,
                aberto: updateEditalDto.aberto
            },
            where: {
                id: Number.parseInt(updateEditalDto.id)
            }
        })
        return {
            message: 'Edital atualizado com sucesso',
            edital: { ...edital }
        };
    }
}
