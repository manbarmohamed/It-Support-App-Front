import { PanneEquipement } from "./panne-equipement"
import { Ticket } from "./ticket"

export class Panne {

    id!:number
    nom!:string
    tickets!:Ticket[]
    historiques!: PanneEquipement
}
