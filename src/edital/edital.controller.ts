import { Controller, Get, Param, Query } from '@nestjs/common';
import { EditalService } from './edital.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('edital')
@IsPublic()
export class EditalController {
    constructor(private readonly editalService: EditalService) { }
    @Get()
    findAll() {
        return this.editalService.findAll();
    }

    @Get('filtrar')
    findOne(@Query('ano') ano: string, @Query('ong') ong: string) {
        return this.editalService.findByYearAndOng(Number(ano), Number(ong));
    }
}
