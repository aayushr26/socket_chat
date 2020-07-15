import { Pipe, PipeTransform, NgModule } from '@angular/core';
import * as routes from '../../constant/absolute-routes/absolute-routes';

@Pipe({
  name: 'absolutePath'
})
export class AbsoluteRoutingPipe implements PipeTransform {

  transform(route) {
    return routes[route];
  } 
}

@NgModule({
  imports: [  ],
  declarations: [AbsoluteRoutingPipe],
  exports: [AbsoluteRoutingPipe]
})
export class AbsoluteRoutingModule { }
