import { PartialType } from '@nestjs/mapped-types';
import { CreateLinkDto } from './create-link.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateLinkDto extends PartialType(CreateLinkDto) {
    @IsNotEmpty({ message: 'O campo Id não pode estar vazio' })
    id?: string;

}