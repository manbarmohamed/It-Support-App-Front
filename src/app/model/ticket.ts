import { TicketStatus } from "../enums/ticket-status"
import { Equipement } from "./equipement"
import { Panne } from "./panne"
import { Technicien } from "./technicien"

export class Ticket {

    id!:number
    status!:TicketStatus
    description!:string
    dateCreation!:Date
    technicien!:Technicien
    panne!:Panne
    equipement!:Equipement
}
