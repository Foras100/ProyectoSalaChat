import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../Clases/usuario';
import { ChatService } from '../../services/chat_service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent{

  //@Output() userLogged = new EventEmitter()
  usuario:Usuario = new Usuario();

  constructor( private _chatService:ChatService) { }

  loguearUsuario(){
    if(this.usuario.name!=''){
      this._chatService.setUsuario(this.usuario)    
      this._chatService.addUser(this.usuario)
    }
    
    //this.userLogged.emit(this.usuario.name)
  }


}
