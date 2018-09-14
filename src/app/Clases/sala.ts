import { Mensaje } from "./mensaje";

export class Sala {
    id:number
    name:string
    messages: Mensaje[]

    constructor (){
        this.messages=[]
    }

    agregarMensaje(idSala:number,msg:string,username:string){
        this.messages.push(new Mensaje(idSala,msg,username))
    }
}


