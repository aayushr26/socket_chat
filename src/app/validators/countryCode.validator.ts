import { AbstractControl, FormGroup, Validators } from '@angular/forms';

export function mobileNumberValidator(f: FormGroup) {
    if (f.value.countryCode) {
        return Validators.required(f.get('phoneNumber')) ? {
            mobileNumber: true,
        } : null;
    }
    //   if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    //     return { validUrl: true };
    //   }
    //   return null;
}


// function emailConditionallyRequiredValidator(formGroup: FormGroup) {
//     if (formGroup.value.myCheckbox) {
//       return Validators.required(formGroup.get('myEmailField')) ? {
//         myEmailFieldConditionallyRequired: true,
//       } : null;
//     }
//     return null;
//   }