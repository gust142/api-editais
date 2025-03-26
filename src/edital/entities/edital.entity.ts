import { Ong } from "@prisma/client";

export class Edital {
    id?: string;
    numero: number;
    ano: number;
    descricao: string;
    ong?: Ong;
}