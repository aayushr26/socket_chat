import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { VALIDATION } from '../../../../constant/validation/forms.validator';
import { PATTERN_ERRORS, NUMERIC_CONSTANTS } from '../../../../constant/validation/validation-constant';
import { ForgotPasswordService } from '../../forgot-password/service/forgot-password.service';
import { Router } from '@angular/router';
import { FORGOT_PASSWORD, SIGNUP } from 'src/app/constant/absolute-routes/absolute-routes';
import { LOGO } from 'src/app/constant/messages/messages';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    MSG = PATTERN_ERRORS;
    hide = true;
    loginForm: FormGroup;
    logo = LOGO;
    maxLength = NUMERIC_CONSTANTS.passwordMaxLength;
    maxLengthEmail = NUMERIC_CONSTANTS.emailMaxLength
    constructor(private loginService: LoginService, private formBuilder: FormBuilder, private _forgot: ForgotPasswordService, private _router: Router) {
    }

    ngOnInit() {
        this.createForm();
    }

    // create form
    createForm() {
        this.loginForm = this.formBuilder.group(
            {
                email: ['', VALIDATION.email],
                password: ['', VALIDATION.password]
            }
        );
    }

    getControl(control) {
        return this.loginForm.controls[control];
    }

    /*
         Method For Calling Login API
    */
    login() {

        if (this.loginForm.invalid) { return; }

        this.loginForm.disable();
        this.loginService.login(this.loginForm.value).subscribe(
            response => { },
            
            err => { this.loginForm.enable() }
        );
    }

    forgotRoute() {
        // this._forgot.email.next(null);
        this._router.navigate([SIGNUP])
    }
}
