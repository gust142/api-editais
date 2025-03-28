import { Body, Controller, Post, Put } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { LinkService } from './link.service';

@Controller('link')
export class LinkController {

    constructor(private readonly linkService: LinkService) { }
    @Post()
    create(@Body() createLinkDto: CreateLinkDto) {
        return this.linkService.create(createLinkDto);
    }

    @Put()
    update(@Body() updateLinkDto: UpdateLinkDto) {
        return this.linkService.update(updateLinkDto);
    }

}
