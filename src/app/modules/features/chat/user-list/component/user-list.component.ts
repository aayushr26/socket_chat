import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserListService } from '../service/user-list.service';
import { Pagination } from 'src/app/models/pagination';
import { MatPaginator } from '@angular/material';
import { SocketService } from 'src/app/modules/shared/services/socket.service';
import { NO_RECORDS, LOADING } from 'src/app/constant/messages/messages';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { LoaderService } from 'src/app/modules/shared/services/loader.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends Pagination implements OnInit {
  @Output() getUser = new EventEmitter();
  userList: any[] = [];
  noRecords = LOADING;
  showSearch: boolean = false;
  showAll: boolean = false;
  userId: string;
  hideMsg: boolean;
  // showAll: boolean=true;
  allUserList: any[] = [];
  constructor(private _service: UserListService, private _socket: SocketService, private _utility: UtilityService, private _loaderService: LoaderService) {
    super()
    this.userId = this._utility.getAdminId();
  }

  ngOnInit() {
    // this.getUserList();
    this._socket
      .getMessages()
      .subscribe((message) => {

        // console.log(message);

        // const found = this.userList.some(el => el._id === message.sender);
        if (this.userList.length && !this.showAll ) {
          this.userList.forEach(function (el, index, array) {
            if (el._id === message.sender) {
              // el = message;
              array.splice(index, 1);
              // console.log(array);
            }
            else if (el._id === message.receiver) {
              array[index].msg = message.msg;
              array[index].time = message.time;

            }
            // else{
            // }
            // array.unshift(message)
          });
          if (message._id !== this.userId)
            this.userList.unshift(message)
          // console.log(this.userList);
        }
        else {
         if( message._id !== this.userId){
          this.userList.unshift(message)
          this.userEmit(message)
         }
        }

      });

      this._socket.listenDelete().subscribe(data=>{
        this.userList.map(el=>{
          if(el._id==data._id && data.success){
            el.msg='',
            el.time=''
          }
        })
      })

    this.getChattedUser();
  }
  getChattedUser(notEmit?) {
    this._loaderService.loader.next(true);
    let data = { ...this.validPageOptions }
    this._socket.chattedUsers(data);
    this._socket.listenChattedUsers().subscribe((data) => {
      // console.log(data);
      this.allUserList = [];
      this._loaderService.loader.next(false);
      this.showAll =false;
      this.userList = data['result']
      !data['result'].length ? this.noRecords = NO_RECORDS : '';
      if(!notEmit)
      this.userEmit(this.userList[0])
    })
  }

  changePage(event: MatPaginator) {
    this.pageOptionsOnChange = event;
    if (this.total == 0) {
      return;
    }
    this.getUserList();
  }

  getUserList(notEmit?) {
    this.userList=[]
    let body = { ...this.validPageOptions };
    this._service.getUserList(body).subscribe(data => {
      // this.showMsg=false;
      // console.log(data.data['result']);
      
      this.allUserList = data.data['result']
      this.showAll=true;
      // console.log(data.data['result'].length);
      
      !data.data['result'].length ? this.noRecords = NO_RECORDS : '';
      // if (!notEmit) {
      //   this.userEmit(this.userList[0])
      // }
    })
  }
  userEmit(data) {
    this.getUser.emit(data)
  }
  openUser(user) {
    this.userEmit(user);
    this.getChattedUser(true)

    // if(this.userList.length){
    //   this.userList.forEach(function (el,index,array){
    //     if(user._id ===el._id){
    //       array.splice(index,1)
    //       // debugger
    //     }
    //   })
    // }
    // this.userList.unshift(user)
    // this.getChattedUser()
    // debugger
  }
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.getUserList(true);
  }
}
