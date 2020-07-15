import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ForgotPasswordService } from '../service/forgot-password.service';
import { POPUP_MESSAGES, LOGO } from '../../../../constant/messages/messages';
import { VALIDATION } from '../../../../constant/validation/forms.validator';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['../../login/component/login.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnChanges {

    logo = LOGO
    forgotForm: FormGroup;
    showSpinner = false;
    title = POPUP_MESSAGES.forgotPasswordTitle;
    $subscription: Subscription;
    constructor(
        private _forgotPasswordService: ForgotPasswordService, private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.createForm();
        this.$subscription = this._forgotPasswordService.email.subscribe(res => {  //subscribe of email
            if (res) this.email.setValue(res)
        })
    }
    //Create form
    createForm() {
        this.forgotForm = this.formBuilder.group({
            email: ['', VALIDATION.email]
        });
    }

    get email(): FormControl {
        return this.forgotForm.get('email') as FormControl;
    }

    /*
         Method For Calling Validating Email
    */
    validateEmail() {
        if (this.forgotForm.invalid || this.forgotForm.disabled) {
            return;
        }
        const data = { ...this.forgotForm.value };

        this.forgotForm.disable();
        this._forgotPasswordService.validateEmail(data)
            .subscribe(
                response => { },
                err => { this.forgotForm.enable(); }
            );
    }

    ngOnChanges() {
        this.$subscription.unsubscribe();
    }


}
