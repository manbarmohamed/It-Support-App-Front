import { EquipementStatus } from "../enums/equipement-status"
import { PanneEquipement } from "./panne-equipement"
import { Ticket } from "./ticket"
import { User } from "./user"

export class Equipement {

    id!:number
    name!:string
    status!:EquipementStatus
    user!:User
    tickets!:Ticket[]
    historique!:PanneEquipement[]
}
