import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { Router } from '@angular/router';
import { CONFIRM_FORGOT_PASSWORD } from '../../../../constant/absolute-routes/absolute-routes';
import { FORGOT_PASSWORD } from '../../../../constant/urls/urls';
import { map, catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class ForgotPasswordService {

    email = new BehaviorSubject(null);

    setForgotEmail(email) {
        this.email.next(email.email);
    }
    constructor(
        private http: HttpService,
        private router: Router
    ) { }

    /*
       Method For Validating Forgot Password Email
   */
    validateEmail(data) {
        // data = this.utilityService.trim(data);
        return this.http.post(FORGOT_PASSWORD, data).pipe(
            map(
                response => {
                    this.emailValidationSuccess(data);
                    return response
                }
            ),
            catchError(
                error => throwError(error)
            )
        );
    }

    /* 
       Method For Showing popup of successfully verifying and sending reset password link
   */
    emailValidationSuccess(email) {
        this.setForgotEmail(email)
        this.router.navigate([CONFIRM_FORGOT_PASSWORD]);
    }
}
