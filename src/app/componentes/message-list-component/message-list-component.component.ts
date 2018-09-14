import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from '../../Clases/mensaje';
import { Sala } from '../../Clases/sala';
import { ChatService } from '../../services/chat_service';

@Component({
  selector: 'app-message-list-component',
  templateUrl: './message-list-component.component.html',
  styleUrls: ['./message-list-component.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private _chatService: ChatService) { 
    
  }
  ngOnInit() {
  }

}
