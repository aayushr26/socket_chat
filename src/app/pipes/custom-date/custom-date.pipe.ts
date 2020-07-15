import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { DatePipe, } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }
  transform(value: any, args?: any): any {
    // return value?this.datePipe.transform(value,'dd/MM/yyyy'):'-'
    let myDate = value.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
    return this.datePipe.transform(myDate);
  }

}




@NgModule({
  imports: [],
  declarations: [
    CustomDatePipe,
  ],
  exports: [
    CustomDatePipe,
  ],
  providers: [
    DatePipe
  ]

})
export class CustomDatePipeModule { }