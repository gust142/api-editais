import { Body, Controller, Get, Post } from '@nestjs/common';
import { OngService } from './ong.service';
import { CreateOngDto } from './dto/create-ong.dto';

@Controller('ong')
export class OngController {
    constructor(private readonly ongService: OngService) { }

    @Post()
    create(@Body() createOngDto: CreateOngDto) {
        return this.ongService.create(createOngDto);
    }

    @Get()
    findAll() {
        return this.ongService.findAll();
    }

}
