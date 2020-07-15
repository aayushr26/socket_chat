import { Injectable } from '@angular/core';
import { HttpService } from '../../../../shared/services/http.service';
import { ADMIN_USER, ADMIN_USER_DETAIL } from '../../../../../constant/urls/urls';
import { DETAILS, DEL } from '../../../../../constant/messages/messages';

@Injectable()
export class UserDetailService {

  constructor(private _http: HttpService) { }

  getUserDetail(userId) {
    return this._http.get(ADMIN_USER_DETAIL, { id: userId });
  }
  changeStatus(body) {
    return this._http.put(`${ADMIN_USER}?id=${body.id}&action=${body.action}`, body)

  }
}
