import { randomUUID } from "node:crypto"
import { iSectors } from "src/modules/users/entities/user.entity"

export class Order {
    readonly id : string
    title : string
    description : string
    topic : string
    is_activate?: boolean
  
    clientId : string

    constructor(){
        this.id = randomUUID()
    }
}