import { Component, OnInit, Output } from '@angular/core';
import { SocketService } from 'src/app/modules/shared/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  userData: any;
  constructor(private _socket: SocketService) { }

  ngOnInit() {
    this._socket.setupSocketConnection()
  }

  getUser(event) {
    this.userData = event;
  }
}
