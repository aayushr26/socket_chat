import { Component, OnInit, Input, OnChanges, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SocketService } from 'src/app/modules/shared/services/socket.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { POPUP_MESSAGES, NO_RECORDS, LOADING } from 'src/app/constant/messages/messages';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit, OnChanges {
  message = new FormControl('');
  @Input() userData: any;
  messageList: any = [];
  nextHit: boolean = false;
  page: number = 1;
  top: boolean = false;
  bottom: boolean = false;
  @ViewChild("scrollMe", { static: true }) scrollMe: ElementRef;
  isScrolled: boolean = false;
  status: boolean;
  lastSeen: any;
  scrollDistance = 5;
  scrollUpDistance = 5;
  profileData: any;
  typing: boolean = false;
  noRecords: string = LOADING;
  constructor(private _socket: SocketService, public _utility: UtilityService, private _cd: ChangeDetectorRef) {
    this.profileData = this._utility.getUserData();

  }

  ngOnInit() {
    this._socket
      .getMessages()
      .subscribe((message) => {
        console.log(this.messageList);
        
        if (this.userData && (this.userData._id == message.receiver || this.userData._id == message.sender)) {
          this.messageList.push(message);
          debugger
          this.typing = false;
          setTimeout(() => { this.scrollBottom() }, 0);
        }
      });
    this._socket
      .listenState()
      .subscribe((state) => {
        if (this.userData && state.userId == this.userData._id) {
          this.status = state.status;
          this.lastSeen = !state.status ? state.lastSeen : 0
          this.typing = !state.status ? false : this.typing;
        }
      });

    this.message.valueChanges.subscribe(el => {
      if (this.message.value && this.message.value.trim()) {
        let data = {
          receiverId: this.userData._id,
        }
        this._socket.userTyping(data);
      }
    })

    this._socket
      .listenTyping()
      .subscribe((state) => {
        if (this.userData && state.userId == this.userData._id) {
          this.typing = true;
        }
      });

    this._socket
      .listenDelete()
      .subscribe((del) => {
        if (del && this.userData && del.success && this.userData._id === del._id) {
          this.messageList = [];
        }
      });


  }
  showConsole() {
    console.log('hey');

  }
  ngOnChanges() {
    if (this.userData) {
      console.log(this.userData);
      this.messageList = [];
      this.page = 1;
      let data = {
        page: 1,
        limit: 50,
        receiverId: this.userData._id
      }
      this._socket.getChatMessage(data);
      this._cd.detectChanges();

      console.log(' on change');
      this.getOurChatMessage()

    }
    else {
      this.noRecords = !this.messageList.length ? NO_RECORDS : '';
    }
  }


  getOurChatMessage() {
    this._socket.listenChatMessage().subscribe(chat => {
      this.nextHit = chat.next;
      this.status = chat.isOnline;
      this.lastSeen = !chat.isOnline ? chat.lastSeen : 0;
      if (chat && chat['result']) {
        let chatArray = chat['result'].reverse()
        this.messageList.push(...chatArray)
        this.noRecords = !this.messageList.length ? NO_RECORDS : '';
        this.typing = false;
        this._cd.detectChanges();
        this.scrollBottom();
      }
    });
  }
  sendMessage() {
    let data = {
      receiverId: this.userData._id,
      msg: this.message.value,
      name: this.profileData.name
    }
    this._socket.sendMessage(data);
    this.message.reset();
  }

  pagination() {
    // this.top = true;
    if (this.nextHit) {
      let data = {
        page: ++this.page,
        limit: 50,
        receiverId: this.userData._id
      }
      this._socket.getChatMessage(data);
      console.log(' on pagination');

      this._socket.listenChatMessage().subscribe(chat => {
        this.nextHit = chat.next;
        if (chat && chat['result']) {
          let chatArray = chat['result'].reverse()
          this.messageList = [...chatArray, ...this.messageList]
          this.noRecords = !this.messageList.length ? NO_RECORDS : '';
          // this.messageList
        }
      });
    }
  }
  onScroll() {
    console.log('----pagination----');

    this.pagination();
  }

  scrollBottom(): void {
    try {
      this.scrollMe.nativeElement.scrollTo({ top: this.isScrolled ? 0 : this.scrollMe.nativeElement.scrollHeight, behavior: 'smooth' })
      // this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;

    }
    catch (err) { }
  }

  clearChat() {
    let body = {
      receiverId: this.userData._id,
    }
    let data = {
      title: POPUP_MESSAGES.confrim,
      message: `Are you sure you want to clear messages in this chat ?`
    }
    this._utility.openDialog(data).subscribe(result => {
      if (result) {
        this._socket.deleteChat(body);
      }
    })
  }

}
