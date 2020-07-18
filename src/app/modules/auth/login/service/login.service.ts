import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { LOGIN } from '../../../../constant/urls/urls';
import { map, catchError } from 'rxjs/operators';
import { DASHBOARD, CHAT } from 'src/app/constant/routes/routes';
import { DataTransferService } from 'src/app/modules/shared/services/data-transfer.service';

@Injectable()
export class LoginService {

    constructor(
        private _http: HttpService,
        private _router: Router,
        private _dataTransfer: DataTransferService
    ) {
    }

    /*  
        Method For Calling Login API
    */
    login(data) {
        return this._http.post(LOGIN, data).pipe(
            map(
                response => {
                    this.loginSuccess(response.data);
                    return response;
                }
            ),
            catchError(err => throwError(err))
        );
    }

    /*
        Method For Login
    */
    loginSuccess(data) {
        
        // localStorage.setItem('token', data['token']);
        // this._dataTransfer.profileData = data;
        // this._router.navigate([DASHBOARD]);
        localStorage.setItem('token',data.authToken)
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('id', JSON.stringify(data._id));
        this._router.navigate([CHAT])
    }
}
