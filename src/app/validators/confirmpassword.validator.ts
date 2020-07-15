import { AbstractControl } from '@angular/forms';



export const passwordMatcher = (control: AbstractControl): { [key: string]: boolean } => {
    const password = control.get('newPassword') || control.get('password');
    const confirm = control.get('confirmPassword');
    if (!password || !confirm) {
        return null;
    }
    if(password && confirm && confirm.value && confirm.value.length>0){
    return password.value === confirm.value ? null : { matchedPassword: true };
    }
};
