import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value && value.firstName) {
    return `${value.firstName} ${value.lastName}`;
    }else{
      return ''
    }
  }

}

@NgModule({
  declarations: [FullNamePipe],
  imports: [
    // CommonModule
  ],
  exports:[FullNamePipe]
})
export class FullNameModule { }