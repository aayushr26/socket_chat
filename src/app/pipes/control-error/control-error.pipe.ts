import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'controlError'
})

export class ControlErrorPipe implements PipeTransform {

  transform(errorName: any, controlName: string, customMessage?: any): any {
    if (errorName) {
      const ctrl: string = Object.keys(errorName)[0];
      switch (ctrl) {
        case 'required':
          return `${controlName} is required.`;
        case 'maxlength':
          return `${controlName} must be at most ${errorName.length.maxLength} characters.`;
        case 'minlength':
          return `${controlName} must be at least ${errorName.length.minLength} characters.`;
        case 'min':
          return `${controlName} must be greater then ${errorName.min.min}`;;
        case 'max':
          return `${controlName} must be less then ${errorName.max.max}`;
        case 'pattern':
          return customMessage || `Please enter a valid ${controlName.toLowerCase()}` ;
        case 'mustMatch':
          return `Confirm password is not matched with password`;
        default:
          return `Please define your validation message!`;
      }
    }
  }

}


@NgModule({
  declarations: [ControlErrorPipe],
  imports: [  ],
  exports: [ControlErrorPipe]
})
export class ErrorMessageModule { }