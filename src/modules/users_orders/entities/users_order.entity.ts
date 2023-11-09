import { randomUUID } from "node:crypto"
import { iSectors } from "src/modules/users/entities/user.entity"

export class UserOrder {
    readonly id : string
    start_treatment : Date
    end_treatment : Date 
    is_activate: boolean
    vendorId : string 
    clientId : string 
    orderId : string
    topic : iSectors

    constructor(){
        this.id = randomUUID()
    }
}

