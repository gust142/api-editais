import { PartialType } from '@nestjs/mapped-types';
import { CreateEditalDto } from './create-edital.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateEditalDto extends PartialType(CreateEditalDto) {
    @IsNotEmpty({ message: 'O campo Id não pode estar vazio' })
    id?: string;

}
