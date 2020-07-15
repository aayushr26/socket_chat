import {COMMON_MESSAGES} from '../../../../../constant/messages/messages';
import {Injectable} from '@angular/core';
import {HttpService} from '../../../../shared/services/http.service';
import {UtilityService} from '../../../../shared/services/utility.service';
import { ADMIN_UPDATE} from '../../../../../constant/urls/urls';
import {throwError} from 'rxjs';
import {DataTransferService} from '../../../../shared/services/data-transfer.service';
import {map, catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SETTINGS} from '../../../../../constant/absolute-routes/absolute-routes';

@Injectable()
export class EditProfileService {


  constructor(
      private _http: HttpService,
      private _utilityService: UtilityService,
      private _dataService: DataTransferService,
      private _router: Router
  ) {
  }

  /*
      Method For Edit Profile
  */
  editProfile(data) {
    let body = {...data};
    delete body['email'];
    return this._http.put(ADMIN_UPDATE, body).pipe(
        map(
            response => {
              if (response['statusCode'] === 200) {
                this._utilityService.showAlert(COMMON_MESSAGES.UPDATED('Profile'));
                this._dataService.profileData = {...this._dataService.profileData, ...body}; //replace the updated data with body
                this._dataService.profileDetail.next(this._dataService.profileData);
                this._router.navigate([SETTINGS]);
              }
            }
        ),
        catchError(
            error => {
              this._utilityService.errorAlert(error);
              return throwError(error);
            }
        )
    );
  }

  /**
   * @description Getting Admin Profile Detail
   */
  getProfileDetail() {
    return this._dataService.profileDetail;
  }

  showAlert(message) {
    this._utilityService.showAlert(message);
  }

}
