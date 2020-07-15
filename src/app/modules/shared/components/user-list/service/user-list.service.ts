import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { REPORT_LIST, ADMIN_USER, USER_DASHBOARD } from 'src/app/constant/urls/urls';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../../../services/form.service';
import { REPORTED_FILTER, GENDER_FILTER, STATUS_FILTER } from '../../../../../constant/messages/messages';

@Injectable()
export class UserListService {


  constructor(private _http: HttpService, private _fb: FormBuilder, private _formService: FormService) { }

  filterObject = {
    reportedFilter: REPORTED_FILTER,
    genderFilter: GENDER_FILTER,
    statusFilter: STATUS_FILTER
  }
  getFilterForm() {
    return this._fb.group(this._formService.getFilterFormControls(['reported', 'gender', 'sorting', 'status', 'fromDate', 'toDate']))
  }

  getUserListing(data, type) {
    let url = type === 'reported' ? REPORT_LIST : USER_DASHBOARD
    return this._http.get(url, data);
  }

  changeStatus(body) {
    return this._http.put(`${ADMIN_USER}?id=${body.id}&action=${body.action}`, body)
  }

}
