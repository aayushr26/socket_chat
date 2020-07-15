import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { USER_TAB, REPORT_LIST, POST_DASHBOARD } from '../../../../../constant/urls/urls';
import { POST_ACTION } from '../../../../../constant/urls/urls';
import { REPORTED_FILTER, STATUS_FILTER, POST_TYPE_FILTER } from '../../../../../constant/messages/messages';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../../../services/form.service';

@Injectable()
export class PostListService {

  filterObject = {
    reportedFilter: REPORTED_FILTER,
    postTypeFilter: POST_TYPE_FILTER,
    statusFilter: STATUS_FILTER,
  }

  constructor(private _http: HttpService,
    private _fb: FormBuilder, private _formService: FormService
  ) { }
  getFilterForm() {
    return this._fb.group(this._formService.getFilterFormControls(['reported', 'postType', 'mood', 'sorting', 'status', 'fromDate', 'toDate']))
  }

  getPostListing(data, type) {
    let url;
    if (type === 'user') {
      url = USER_TAB
    }
    else if (type === 'reported') {
      url = REPORT_LIST
    }
    else {
      url = POST_DASHBOARD
    }
    return this._http.get(url, data);
  }

  changeStatus(body) {
    return this._http.put(`${POST_ACTION}?id=${body.id}&action=${body.action}`, body)
  }
}
