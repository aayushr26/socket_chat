import { Injectable } from '@angular/core';
import { HttpService } from '../../../../shared/services/http.service';
import { USER, ADMIN_USER } from '../../../../../constant/urls/urls';
import { UserList } from '../../../../../models/user';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { FormBuilder } from '@angular/forms';
import { DEL, REPORTED_FILTER, USER_SORT_FILTER, GENDER_FILTER, STATUS_FILTER } from '../../../../../constant/messages/messages';

@Injectable({ providedIn: 'root' })
export class UserListingService {

  /**
   * Filter Object
   */
  filterObject = {
    reportedFilter: REPORTED_FILTER,
    genderFilter: GENDER_FILTER,
    sortFilter: USER_SORT_FILTER,
    statusFilter: STATUS_FILTER
  }
  constructor(
    private _http: HttpService,
    private _formService: FormService,
    private _fb: FormBuilder
  ) { }

  getFilterForm() {
    return this._fb.group(this._formService.getFilterFormControls(['reported', 'gender', 'sorting', 'status', 'fromDate', 'toDate']))
  }

  getUserListing(data) {
    return this._http.get<Common.List<UserList[]>>(USER, data);
  }

  changeStatus(body) {
    return this._http.put(`${ADMIN_USER}?id=${body.id}&action=${body.action}`, body)

  }
}
