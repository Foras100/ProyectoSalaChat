import { Component } from '@angular/core';
import { Usuario } from './Clases/usuario';
import { ChatService } from './services/chat_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salaChat';
  usuario:Usuario;

  constructor(private _chatService: ChatService){

  }

  crearUsuario(userName:string){
    if(userName!=''){
      this.usuario=new Usuario()
      this.usuario.name=userName
    }
  }
}
