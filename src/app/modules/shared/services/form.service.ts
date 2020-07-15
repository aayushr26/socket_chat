import { Injectable } from '@angular/core';
import { Validators, AbstractControl, FormGroup } from '@angular/forms';
import { VALIDATION } from 'src/app/constant/validation/forms.validator';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor() {
    }
    // VALIDATION = VALIDATION // 

    matchPassword(form: AbstractControl) {
        let password = form.get('password').value;
        let confirmPassword = form.get('confirmPassword').value;
        if (password !== confirmPassword) {
            form.get('confirmPassword').setErrors({ matchPassword: true })
        } else {
            if (password === confirmPassword) {
                if (form.get('confirmPassword').errors) {
                    delete form.get('confirmPassword').errors['matchPassword'];
                    let keys = Object.keys(form.get('confirmPassword').errors);
                    if (keys.length === 0) {
                        form.get('confirmPassword').setErrors(null);
                    }
                }
            }
        }
    }
    getControl(name, required = true) {
        let compose = VALIDATION[name]
        if (required) {
            if (name === 'checkbox') {
                compose.splice(0, 0, Validators.requiredTrue);
            } else {
                compose.splice(0, 0, Validators.required);
            }
        }
        return ['', Validators.compose(
            compose
        )];
    }


    getFilterFormControls(keys: string[]) {
        let form = {};
        for (let key of keys) {
            form[key] = [null];
        }
        return form;
    }

    /**
        * Marks all controls in a form group as touched
        * @param formGroup - The form group to touch
        */
    markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();

            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }

    // for filter apply and reset if 
    formValue(form: FormGroup) {
        let count = 0;
        Object.keys(form.value).forEach(el => {
            if (form.value[el]) {
                count++;
            }
        })
        return count;
    }


    // scroll to error text field and text area
    scrollToError() {
        const firstElementWithError = document.querySelector('textarea.ng-invalid, input.ng-invalid');
        if (firstElementWithError)
            window.scroll({
                top: this.getTopOffset(firstElementWithError),
                left: 0,
                behavior: "smooth"
            });
    }
    getTopOffset(controlEl): number {
        const labelOffset = 120;
        return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    }
    // scroll to error end

}

