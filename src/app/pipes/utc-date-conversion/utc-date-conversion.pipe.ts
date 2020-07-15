import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'utcDateConversion'
})
export class UtcDateConversionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      let date = new Date(value)
      if (value) {
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())
      }
      else {
        return;
      }
    }
  }
}


@NgModule({
  declarations: [UtcDateConversionPipe],
  imports: [
  ],
  exports:[UtcDateConversionPipe]
})
export class UtcDateConversionModule { }
