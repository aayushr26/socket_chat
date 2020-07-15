import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from '../service/change-password.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../../../../shared/services/form.service';
import { VALIDATION, MustMatch } from 'src/app/constant/validation/forms.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [ChangePasswordService]
})
export class ChangePasswordComponent implements OnInit {

  hideConfirmPassword = true;
  hidePassword = true;
  hideOldPassword = true;
  changePasswordForm: FormGroup;

  constructor(
    private _changePasswordService: ChangePasswordService,
    private _formBuilder: FormBuilder,
    private _formService: FormService,
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.changePasswordForm = this._formBuilder.group(
      {
        oldPassword: ['', [...VALIDATION.password]],
        password: ['', [...VALIDATION.password]],
        confirmPassword: ['', [...VALIDATION.confirmPassword]]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }
  getControl(control) {
    return this.changePasswordForm.controls[control] as FormControl;
  }

  //submit 
  changePassword() {
    if (this.changePasswordForm.valid || this.changePasswordForm.disabled) {
      let data = { ...this.changePasswordForm.value };
      this.changePasswordForm.disable();
      this._changePasswordService.changePassword(data)
        .subscribe(
          response => {},
          error => {
            this.changePasswordForm.enable();
          }
        );
    }
  }

}
