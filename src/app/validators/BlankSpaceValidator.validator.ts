import {FormControl} from '@angular/forms';

export function BlankSpaceValidator(control: FormControl) {
  if (control.value) {
    return control.value.trim() !== '' ? null : {
      isEmpty: true
    };
  }
}
