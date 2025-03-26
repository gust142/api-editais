import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";
import { Recurso } from "../entities/recurso.entity";

export class CreateRecursoDto extends Recurso {

    @IsNotEmpty({ message: 'O campo Nome não pode estar vazio' })
    nome: string;
    @IsNotEmpty({ message: 'O campo Email não pode estar vazio' })
    @IsEmail({}, { message: 'Campo de Email com formato incorreto' })
    email: string;
    @IsNotEmpty({ message: 'O campo Cargo não pode estar vazio' })
    cargo: string;
    @IsNotEmpty({ message: 'O campo Assunto não pode estar vazio' })
    assunto: string;
    @IsNotEmpty({ message: 'O campo editalId não pode estar vazio' })
    @IsNumber({}, { message: 'Edital não especificado' })
    editalId: number;
}
