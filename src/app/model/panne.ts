import { PanneEquipement } from "./panne-equipement"
import { Ticket } from "./ticket"

export class Panne {

    id!:number
    name!:string
    tickets!:Ticket[]
    historiques!: PanneEquipement
}
