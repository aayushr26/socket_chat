import { FormControl } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { PATTERN_ERRORS } from '../../constant/error/error';
import { VALIDATION_MESSAGES,toTitleCase } from '../../constant/messages/messages';
@Pipe({
  name: 'validate',
  pure:false 
})
export class ValidationErrorPipe implements PipeTransform {
    constructor() {
    }
  transform(control: FormControl, name:string): any {
    return control&&control.errors?this.getValidationError(control,name):''
  }

  getValidationError(control: FormControl, name) {
    if (control.hasError('required')) { 
        return `${toTitleCase(name)} is required`;
    }
    if (control.hasError('pattern')) {
        let pattern = control.errors.pattern.requiredPattern;
        return `Enter a valid password.`; 
    }
    if (control.hasError('minlength')) {
        return `${toTitleCase(name)} must be at least ${control.errors.length.minLength} characters long`;
    }
    if (control.hasError('maxlength')) {
        return `${toTitleCase(name)} can not be more than ${control.errors.length.maxLength} characters long`;
    }
    if (control.hasError('matchPassword')) {
        return VALIDATION_MESSAGES[name]['matchPassword'] || '';
    }
}
}
