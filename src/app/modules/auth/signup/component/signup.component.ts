import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VALIDATION } from '../../../../constant/validation/forms.validator';
import { PATTERN_ERRORS, NUMERIC_CONSTANTS } from '../../../../constant/validation/validation-constant';
import { ForgotPasswordService } from '../../forgot-password/service/forgot-password.service';
import { Router } from '@angular/router';
import { LOGO } from 'src/app/constant/messages/messages';
import { SignupService } from '../service/signup.service';
import { MatDialog } from '@angular/material';
import { VerifyOtpComponent } from 'src/app/modules/shared/components/verify-otp/component/verify-otp.component';
import { USERS } from 'src/app/constant/absolute-routes/absolute-routes';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { CHAT } from 'src/app/constant/routes/routes';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  MSG = PATTERN_ERRORS;
  hide = true;
  signupForm: FormGroup;
  logo = LOGO;

  maxLength = NUMERIC_CONSTANTS.passwordMaxLength;
  maxLengthEmail = NUMERIC_CONSTANTS.emailMaxLength
  constructor(private _signupService: SignupService, private formBuilder: FormBuilder, private _forgot: ForgotPasswordService, private _router: Router, private _dialog: MatDialog, private _utilityService: UtilityService) {
  }

  ngOnInit() {
    this.createForm();
  }

  // create form
  createForm() {
    this.signupForm = this.formBuilder.group(
      {
        name: ['', VALIDATION.name],
        email: ['', VALIDATION.email],
        password: ['', VALIDATION.password]
      }
    );
  }

  getControl(control) {
    return this.signupForm.controls[control];
  }

  /*
       Method For Calling Login API
  */
  login() {




    // return
    if (this.signupForm.invalid) { return; }

    this.signupForm.disable();
    this._signupService.signup(this.signupForm.value).subscribe(
      response => {
        console.log(this.getControl('email').value);
        this._dialog.open(VerifyOtpComponent, {
          height: '350px',
          width: '350px',
          data: this.getControl('email').value
        }).afterClosed().subscribe(res => {

          this.success(res);
        })

      },

      err => { this.signupForm.enable() }
    );
  }

  success(data) {
    localStorage.setItem('token',data.data.authToken)
    localStorage.setItem('userData', JSON.stringify(data));
    localStorage.setItem('id', JSON.stringify(data.data._id));
    this._router.navigate([CHAT])
  }

  // forgotRoute() {
  //     this._router.navigate([FORGOT_PASSWORD])
  // }

}
