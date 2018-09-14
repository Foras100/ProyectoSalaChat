import { Component, Input, Output } from '@angular/core';
import { Sala } from '../../Clases/sala';
import { Usuario } from '../../Clases/usuario';
import { Mensaje } from '../../Clases/mensaje';
import { EventEmitter } from 'events';
import { ChatService } from '../../services/chat_service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent{

  mensaje: string =""
  msg: Mensaje
  constructor(private _chatService:ChatService) { 

  }

  enviarMensaje(){
    this.msg = new Mensaje(this._chatService.salaActual.id,this.mensaje,this._chatService.usuario.name)
    //this._chatService.salaActual.agregarMensaje(this._chatService.salaActual.id,this.mensaje,this._chatService.usuario.name)
    this._chatService.sendMessage(this.msg)
    this.mensaje=""
  }

}
