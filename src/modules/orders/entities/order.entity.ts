import { randomUUID } from "node:crypto"
import { iSectors } from "src/modules/users/entities/user.entity"

export class Order {
    readonly id : string;
    title : string;
    description : string;
    topic : string;
    
    service_requested : boolean;
    start_service ?: Date | null;
    end_service ?: Date | null;
  
    customerId ?: string ;
    attendantId ?: string | null;

    constructor(){
        this.id = randomUUID()
    }
}