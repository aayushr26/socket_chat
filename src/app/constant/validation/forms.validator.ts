import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PATTERN, NUMERIC_CONSTANTS } from './validation-constant';
import { ValidatorsCustom } from 'src/app/validators/Validator-main';

export const VALIDATION = {
    name: [
        ValidatorsCustom.required,
        ValidatorsCustom.minLength(NUMERIC_CONSTANTS.nameMinLength),
        ValidatorsCustom.maxLength(NUMERIC_CONSTANTS.nameMaxLength),
        Validators.pattern(PATTERN.name)
    ],
    price: [
        Validators.required,
        Validators.pattern(PATTERN.price),
        Validators.minLength(NUMERIC_CONSTANTS.priceMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.priceMaxLength),
        Validators.min(0)
    ],
    email: [
        ValidatorsCustom.required,
        Validators.pattern(PATTERN.email),
        ValidatorsCustom.maxLength(NUMERIC_CONSTANTS.emailMaxLength)
    ],
    title: [
        ValidatorsCustom.required,
        ValidatorsCustom.minLength(NUMERIC_CONSTANTS.titleMinLength),
        ValidatorsCustom.maxLength(NUMERIC_CONSTANTS.titleMaxLength)
    ],
    description: [
        ValidatorsCustom.required,
        ValidatorsCustom.minLength(NUMERIC_CONSTANTS.descriptionMinLength),
        ValidatorsCustom.maxLength(NUMERIC_CONSTANTS.descriptionMaxLength),
    ],
    password: [
        Validators.required,
        Validators.pattern(PATTERN.password),
        ValidatorsCustom.minLength(NUMERIC_CONSTANTS.passwordMinLength),
        ValidatorsCustom.maxLength(NUMERIC_CONSTANTS.passwordMaxLength)
    ],
    confirmPassword: [
        Validators.required
    ],
    phone: [
        Validators.required,
        Validators.pattern(PATTERN.phone),
        Validators.minLength(NUMERIC_CONSTANTS.phoneMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.phoneMaxLength)
    ],
    dropdown: [],
    checkbox: [],

    userType: [
        Validators.required,
    ]
}


// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
