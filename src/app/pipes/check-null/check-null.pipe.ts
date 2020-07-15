import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'checkNull'
})
export class CheckNullPipe implements PipeTransform {
  constructor() {
  }
  transform(value: any, args?: any): any {
    return value ? value : 'N/A'
  }

}

@NgModule({
  imports: [
  ],
  declarations: [
    CheckNullPipe,
  ],
  exports: [
    CheckNullPipe,
  ]

})
export class CheckNullPipeModule { }