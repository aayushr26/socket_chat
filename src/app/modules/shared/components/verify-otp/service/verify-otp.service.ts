import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { VERIFY_OTP } from '../../../../../constant/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class VerifyOtpService {

  constructor(private _http: HttpService) { }

  submit(body) {
     return this._http.post(VERIFY_OTP, body);
  }
}
