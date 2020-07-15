import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailService } from '../service/user-detail.service';
import { USER_LIST } from '../../../../../constant/absolute-routes/absolute-routes';
import { Pagination } from '../../../../../models/pagination';
import { UtilityService } from '../../../../../modules/shared/services/utility.service';
import { DEFAULT_USER_IMG, USER_MESSAGE, CONFIRMATION, DEFAULT_USER_FEMALE_IMG } from 'src/app/constant/messages/messages';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss', '../../../../../components/mat-table-rendered/mat-table-rendered.component.scss']
})
export class UserDetailComponent extends Pagination implements OnInit, OnDestroy {

  userDetail: any;
  userID: string;
  Id: any;
  // DefaultUrl =DEFAULT_USER_IMG;
  DefaultUrl = 'assets/default-image/user_placeholder.jpeg';
  subscription: Subscription;

  constructor(private _actRoute: ActivatedRoute,
    private _userDetailService: UserDetailService,
    private _router: Router,
    private _utilityService: UtilityService) {
    super();
    // subscribing to route
    this.subscription = this._actRoute.params.subscribe(res => {
      this.userID = res['id']
      this.getUserDetail(this.userID);
    })
  }

  ngOnInit() { }

  // Method for getting the user Detail */
  getUserDetail(userId: string) {
    this._userDetailService.getUserDetail(userId).subscribe(res => {
      if (res.statusCode === 200) {
        this.userDetail = res.data;
        // this.DefaultUrl = this.userDetail.gender === 'male' ? DEFAULT_USER_IMG : DEFAULT_USER_FEMALE_IMG;
      }
    }, (err => {
      this._router.navigate([USER_LIST])
    }));
  }


  /* method for changing a user's status  */
  changeStatus(status: string) {
    const body = {
      action: status,
      id: this.userID
    }
    let data = {
      title: CONFIRMATION,
      message: `Are you sure you want to ${status == 'block' ? 'block' : status == 'delete' ? 'delete' : 'unblock'} this user ?`
    }
    this._utilityService.openDialog(data).subscribe(result => {
      if (result) {
        this._userDetailService.changeStatus(body).subscribe(data => {
          if (data.statusCode == 200) {
            this._utilityService.showAlert(status == 'block' ? USER_MESSAGE.BLOCK : status == 'active' ? USER_MESSAGE.UNBLOCK : USER_MESSAGE.DELETE);
            if (status == 'block' || status == 'active') {
              this.userDetail.status = status;
            }
            else {
              this._router.navigate([USER_LIST])
            }
          }
        }, (err => { })
        )
      }
    })
  }

  //Post count update 
  updateCount(event) {
    if (this.userDetail)
      this.userDetail.post = event;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
