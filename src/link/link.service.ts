import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateLinkDto } from './dto/update-link.dto';

@Injectable()
export class LinkService {
    constructor(private prisma: PrismaService) { }


    async create(createLinkDto: CreateLinkDto): Promise<any> {
        const link = await this.prisma.link.create({
            data: {
                nome: createLinkDto.nome,
                url: createLinkDto.url,
                editalId: createLinkDto.editalId
            }
        })
        return {
            message: 'Link criado com sucesso',
            edital: { ...link }
        };
    }
    async update(updateLinkDto: UpdateLinkDto): Promise<any> {
        const link = await this.prisma.link.update({
            data: {
                nome: updateLinkDto.nome,
                url: updateLinkDto.url,
                editalId: updateLinkDto.editalId
            },
            where: {
                id: Number.parseInt(updateLinkDto.id)
            }
        })
        return {
            message: 'link atualizado com sucesso',
            edital: { ...link }
        };
    }

}
