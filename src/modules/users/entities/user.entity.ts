import { Exclude } from "class-transformer";
import { randomUUID } from "node:crypto"
import { Order } from "@prisma/client";

export enum iSectors { A = "Problemas com cartão",B="Cartões",C= "Outros assuntos"}

export class User {
    readonly id: string;
    name: string;
    email: string;
    sector: string;
    is_attendant: boolean;

    @Exclude()
    password: string;

    constructor() {
        this.id = randomUUID();
    }
}
