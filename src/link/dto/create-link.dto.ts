import { IsNotEmpty } from "class-validator";
import { Link } from "../entities/link.entity";

export class CreateLinkDto extends Link {
    @IsNotEmpty({ message: 'O campo Nome não pode estar vazio' })
    nome: string;
    @IsNotEmpty({ message: 'O campo url não pode estar vazio' })
    url: string;
    @IsNotEmpty({ message: 'O campo Edital não pode estar vazio' })
    editalId: number;
}