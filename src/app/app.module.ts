import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponentComponent } from './componentes/user-component/user-component.component';
import { RoomComponentComponent } from './componentes/room-component/room-component.component';
// import { MessageListComponent } from './componentes/message-list/message-list.component';
import { MessageListComponent } from './componentes/message-list-component/message-list-component.component';
import { MessageFormComponent } from './componentes/message-form/message-form.component';
import {FormsModule} from '@angular/forms';
import { ChatService } from './services/chat_service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    RoomComponentComponent,
    MessageListComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
