import { Exclude } from "class-transformer";
import { randomUUID } from "node:crypto"

export enum iSectors { A = "Problemas com cartão",B="Cartões",C= "Outros assuntos"}

export class User {
    readonly id: string;
    name: string;
    email: string;
    sector: string;
    is_vendor: boolean;

    @Exclude()
    password: string;

    constructor() {
        this.id = randomUUID();
    }
}
