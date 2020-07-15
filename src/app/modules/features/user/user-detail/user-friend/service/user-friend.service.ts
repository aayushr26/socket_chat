import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { USER_TAB } from '../../../../../../constant/urls/urls';
import { FormBuilder } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';

@Injectable()
export class UserFriendService {

  constructor(private _http: HttpService, private _fb: FormBuilder, private _formService: FormService) { }
  getFilterForm() {
    return this._fb.group(this._formService.getFilterFormControls(['sorting', 'fromDate', 'toDate']))
  }

  getUserListing(data) {
    return this._http.get(USER_TAB, data);
  }

}
