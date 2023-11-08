import { randomUUID } from "node:crypto"
import { iSectors } from "src/modules/users/entities/user.entity"

export class UserOrder {
    readonly id : string
    start_treatment : string
    end_treatment : string
    vendorId : string 
    clientId : string 
    orderId : string
    topic : iSectors

    constructor(){
        this.id = randomUUID()
    }
}

