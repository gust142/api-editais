import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';
@Injectable()
export class OngService {

    constructor(private prisma: PrismaService) { }
    async create(createOngDto: CreateOngDto): Promise<any> {
        const ong = await this.prisma.ong.create({
            data: {
                nome: createOngDto.nome,
                email: createOngDto.email,
                token: createOngDto.token
            }
        })
        return {
            message: 'Ong criada com sucesso',
            ong: { ...ong, token: undefined }
        };
    }

    async findAll(): Promise<any[]> {
        return await this.prisma.ong.findMany({
            select: {
                id: true,
                nome: true,
                email: true
            }
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} product`;
    }

    update(id: number, updateOngDto: UpdateOngDto) {
        return `This action updates a #${id} product`;
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
