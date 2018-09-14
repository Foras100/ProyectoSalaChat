export class Mensaje {
    idroom: number
    username: string
    text: string

    constructor(roomId:number,msg:string,username:string ){
        this.username=msg
        this.idroom=roomId
        this.text=username
    }
}
