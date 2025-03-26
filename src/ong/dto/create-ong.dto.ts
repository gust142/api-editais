import { IsEmail, IsNotEmpty } from "class-validator";
import { Ong } from "../entities/ong.entity";

export class CreateOngDto extends Ong {

    @IsNotEmpty({ message: 'O campo Nome não pode estar vazio' })
    nome: string;
    @IsNotEmpty({ message: 'O campo Email não pode estar vazio' })
    @IsEmail({}, { message: 'Campo de Email com formato incorreto' })
    email: string;
    @IsNotEmpty({ message: 'O campo Token não pode estar vazio' })
    token: string;
}
