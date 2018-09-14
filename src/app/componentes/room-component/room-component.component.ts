import { Component, OnInit, Input } from '@angular/core';
import { Sala } from '../../Clases/sala';
import { Mensaje } from '../../Clases/mensaje';
import { ChatService } from '../../services/chat_service';

@Component({
  selector: 'app-room-component',
  templateUrl: './room-component.component.html',
  styleUrls: ['./room-component.component.css']
})
export class RoomComponentComponent implements OnInit {

    
  constructor(private _chatService: ChatService) { 
    this._chatService.getSalas().subscribe((listaSalas:Sala[]) =>{
      console.log(listaSalas)
      this._chatService.salas=listaSalas

    })
  }

  ngOnInit() {
  }

}
