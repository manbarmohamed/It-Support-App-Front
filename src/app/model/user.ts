import { Equipement } from "./equipement";
import { Person } from "./person";
import { Ticket } from "./ticket";

export class User extends Person{

    equipements!: Equipement[]
    tickets!:Ticket[]
    
}
