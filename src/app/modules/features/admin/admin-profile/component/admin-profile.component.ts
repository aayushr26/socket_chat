import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../../../shared/services/data-transfer.service';
import { DEFAULT_USER_IMG } from 'src/app/constant/messages/messages';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  profileDetail;
  DefaultUrl = DEFAULT_USER_IMG
  profileSubscriber: any;

  constructor(private _dataService: DataTransferService
  ) {}

  ngOnInit() {
    this.getDetail();
  }

  /**
   * Getting Admin Profile Detail
   */
  getDetail() {
    this.profileSubscriber = this._dataService.profileDetail.subscribe(
      data => {
        if (data)
          this.profileDetail = data;
      }
    )
  }
  ngOnDestroy() {
    if (this.profileSubscriber) {
      this.profileSubscriber.unsubscribe();
    }
  }
}
