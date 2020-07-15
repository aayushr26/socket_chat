import { Component, OnInit } from '@angular/core';
import { POPUP_MESSAGES, LOGO } from '../../../../constant/messages/messages';
import { UtilityService } from '../../../shared/services/utility.service';
import { HttpService } from '../../../shared/services/http.service';
import { Router } from '@angular/router';
import { DataTransferService } from '../../../shared/services/data-transfer.service';
import { LOGOUT } from '../../../../constant/urls/urls';
import { LOGIN } from '../../../../constant/absolute-routes/absolute-routes';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/modules/shared/services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  $profileSubscriber: Subscription;
  profileDetail;
  headerResponse;
  logo: string = LOGO;
  constructor(
    public _utilityService: UtilityService,
    private _http: HttpService,
    private _router: Router,
    private _dataService: DataTransferService,
    private _socket :SocketService
  ) {
    // this.getProfileDetail();
  }

  getProfileDetail() {
    this._dataService.getProfileDetail().subscribe((response: any) => {
      console.log(response);
      
      if (response) {
        this.profileDetail = response;
        this._dataService.profileDetail.next(this.profileDetail);
      }
    }
    )
  }
  ngOnInit() {
    // this.$profileSubscriber = this._dataService.profileDetail.subscribe(
    //   data => {
    //     if (data)
    //       this.profileDetail = data;
    //   }
    // )
    this.profileDetail = this._utilityService.getUserData()

  }
  logout() {
    let data = {
      title: POPUP_MESSAGES.logout,
      message: POPUP_MESSAGES.logoutConfirmation,
      yes: POPUP_MESSAGES.logout
    }
    this._utilityService.openDialog(data).subscribe(success => {
      if (success) {
        this._http.get(LOGOUT, "").subscribe(
          response => {
            if (response['statusCode'] === 200) {
              this._socket.disconnect();
              this._utilityService.clearStorage();
              this._router.navigate([LOGIN]);
            }
          }, err => {
            // this._utilityService.showAlert(SOMETHING_WENT_WRONG, 'error')
          }
        )
      }

    });

  }
  ngOnDestroy() {
    if (this.$profileSubscriber) {
      this.$profileSubscriber.unsubscribe();
    }
  }
}
