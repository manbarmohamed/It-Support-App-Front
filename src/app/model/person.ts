import { Role } from "../enums/role"

export abstract class Person {

    id!:number
    name!:string
    username!:string
    password!:string
    role!:Role
}
