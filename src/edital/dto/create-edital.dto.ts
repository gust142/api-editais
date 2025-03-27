import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";
import { Edital } from "../entities/edital.entity";

export class CreateEditalDto extends Edital {
    @IsNotEmpty({ message: 'O campo Numero não pode estar vazio' })
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Número com formato inválido' })
    numero: number;
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Ano com formato inválido' })
    ano: number;
    @IsNotEmpty({ message: 'O campo Descrição não pode estar vazio' })
    descricao: string;
    @IsNotEmpty({ message: 'O campo Aberto não pode estar vazio' })
    aberto: boolean;
    @IsNotEmpty({ message: 'O campo Ong não pode estar vazio' })
    ongId: number;
}
