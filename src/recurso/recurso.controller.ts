import { Body, Controller, Post } from '@nestjs/common';
import { RecursoService } from './recurso.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('recurso')
@IsPublic()
export class RecursoController {

    constructor(private readonly recursoService: RecursoService) { }

    @Post()
    create(@Body() createRecursoDto: CreateRecursoDto) {
        return this.recursoService.create(createRecursoDto);
    }

}
