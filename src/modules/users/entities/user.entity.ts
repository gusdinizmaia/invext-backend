import { randomUUID } from "node:crypto"

export enum iSectors { A = "Problemas com cartão",B="Cartões",C= "Outros assuntos"}

export class User {
    readonly id: string;
    name: string;
    email: string;
    password: string;
    sector: iSectors;
    is_vendor: boolean;

    constructor() {
        this.id = randomUUID();
    }
}
