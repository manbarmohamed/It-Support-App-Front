import { Equipement } from "./equipement";
import { Panne } from "./panne";
import { PanneEquipementkey } from "./panne-equipementkey";

export class PanneEquipement {
    id!:PanneEquipementkey
    equipement!:Equipement
    panne!:Panne
}
