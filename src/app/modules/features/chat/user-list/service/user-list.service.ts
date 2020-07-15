import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { USERLIST } from 'src/app/constant/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private _http: HttpService) { }

  getUserList(data) {
    return this._http.get(USERLIST, data)
  }
 
}
