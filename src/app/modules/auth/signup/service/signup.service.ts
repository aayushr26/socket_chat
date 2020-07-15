import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { SIGNUP } from 'src/app/constant/urls/urls';

@Injectable()
export class SignupService {

  constructor(private _http: HttpService) { }

  signup(data) {

    console.log(data);
    return this._http.post(SIGNUP, data);

  }

}
