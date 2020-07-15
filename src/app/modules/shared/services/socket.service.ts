import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket;
  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT + '?userId=' + `${JSON.parse(localStorage.getItem('id'))}`);
    // this.socket.on('connected', (data) => {
    //   console.log('hey', data);
    // })
    // socket.emit();

  }
  public sendMessage(message) {
    console.log(message);

    this.socket.emit('Direct_msg', message);
  }
  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('Direct_msg', (message) => {
        console.log(message);

        observer.next(message);
      });
    });
  }

  public getChatMessage(data) {
    console.log(data);

    this.socket.emit('ourChatMessages', data);
  }

  public listenChatMessage = () => {
    return Observable.create((observer) => {
      this.socket.once('ourChatMessages', (chat) => {
        console.log(chat);
        observer.next(chat);

      });
    });
  }

  public chattedUsers(data) {
    console.log(data);
    this.socket.emit('allchattedUsers', data)
  }

  public listenChattedUsers = () => {
    return Observable.create((observer) => {
      this.socket.once('allchattedUsers', (users) => {
        console.log(users);
        observer.next(users);

      });
    });
  }

  public listenState= () => {
    return Observable.create((observer) => {
      this.socket.on('stateChange', (state) => {
        observer.next(state);

      });
    });
  }

  public userTyping(data) {
    console.log(data);
    this.socket.emit('typing', data)
  }

  public listenTyping= () => {
    return Observable.create((observer) => {
      this.socket.on('typing', (state) => {
        observer.next(state);

      });
    });
  }
  
  public deleteChat(data) {
    console.log(data);
    this.socket.emit('deleteWholeChat', data)
  }

  public listenDelete= () => {
    return Observable.create((observer) => {
      this.socket.on('deleteWholeChat', (del) => {
        observer.next(del);

      });
    });
  }

  public disconnect() {
    console.log('disconnect');
    this.socket.emit('disconnected')
  }

}
