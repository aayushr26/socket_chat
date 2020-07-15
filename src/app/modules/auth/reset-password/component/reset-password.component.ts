import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordService } from '../service/reset-password.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MustMatch, VALIDATION } from '../../../../constant/validation/forms.validator';
import { LOGO } from 'src/app/constant/messages/messages';
import { NUMERIC_CONSTANTS } from 'src/app/constant/validation/validation-constant';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['../../login/component/login.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    maxLength = NUMERIC_CONSTANTS.passwordMaxLength;
    passwordHide: boolean = true;
    logo = LOGO;
    confirmPasswordHide: boolean = true;
    token: String;
    resetForm: FormGroup;

    constructor(
        private _accountService: ResetPasswordService,
        private _route: ActivatedRoute, private formBuilder: FormBuilder,
    ) {
        this.token = this._route.snapshot.params.token;
        this.createForm();
    }

    ngOnInit() {
    }

    //create form
    createForm() {
        this.resetForm = this.formBuilder.group(
            {
                password: ['', VALIDATION.password],
                confirmPassword: ['', VALIDATION.confirmPassword]
            },
            {
                validator: MustMatch('password', 'confirmPassword')
            }
        );
    }
    //getter for form control
    getControl(control) {
        return this.resetForm.controls[control];
    }

    //submit
    resetPassword() {

        if (this.resetForm.invalid || this.resetForm.disabled) { return; }

        // let data = { ...this.resetForm.value };
        this.resetForm.disable();
        this._accountService.resetPassword(this.resetForm.value)
            .subscribe(
                response => { },

                err => { this.resetForm.enable(); }
            );
    }

}
