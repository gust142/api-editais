import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { EditalService } from './edital.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CreateEditalDto } from './dto/create-edital.dto';
import { UpdateEditalDto } from './dto/update-edital.dto';

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

    @Post()
    create(@Body() createEditalDto: CreateEditalDto) {
        return this.editalService.create(createEditalDto);
    }

    @Put()
    update(@Body() updateEditalDto: UpdateEditalDto) {
        return this.editalService.update(updateEditalDto);
    }
}
