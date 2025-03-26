import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';

@Injectable()
export class RecursoService {
    constructor(private prisma: PrismaService) { }
    async create(createRecursoDto: CreateRecursoDto): Promise<any> {
        const recurso = await this.prisma.recurso.create({
            data: {
                nome: createRecursoDto.nome,
                email: createRecursoDto.email,
                cargo: createRecursoDto.cargo,
                assunto: createRecursoDto.assunto,
                editalId: createRecursoDto.editalId
            }
        })
        return { message: 'Recurso criado com sucesso' };
    }
}
