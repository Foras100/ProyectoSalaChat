import { Injectable } from '@angular/core'
import { Sala } from '../Clases/sala';
import { Usuario } from '../Clases/usuario';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

    private url = 'https://app-chat-lab4.herokuapp.com'
    private socket

    salas: Sala[] =[]
    usuario: Usuario
    salaActual: Sala


    constructor(){
        this.socket=io(this.url)
        this.salas=[]
        //this.usuario = new Usuario();

        /*let salaPublica = new Sala(3,"Publica")
        this.salas.push(salaPublica)
    
        let salaPrivada = new Sala(2,"Privada")
        this.salas.push(salaPrivada)*/
    }

    setUsuario(usuario:Usuario){
        this.usuario=usuario
    }

    getSalas(){
        let observable = new Observable((observer) => {
            this.socket.on("rooms",(listaSalas: Sala[])=>{
                observer.next(listaSalas)
            this.salas=listaSalas
            console.log(listaSalas)
            })
        })
        return observable
    }
    addSalaActual(sala: Sala)
    {
        this.salaActual = sala;
    }
    sendMessage(message){
        this.socket.emit('add-message',message)
    }
    changeRoom(){
        this.socket.emit('change-room')
    }
    newUser(){
        this.socket.emit('new-user')
    }
    getMessages(){
        let observable = new Observable((observer)=>{
            this.socket.on('messages',(data) =>{
                observer.next(data)
            })
        })
        return observable
    }
    addUser(user: Usuario)
    {
        this.usuario = user;
    }
}