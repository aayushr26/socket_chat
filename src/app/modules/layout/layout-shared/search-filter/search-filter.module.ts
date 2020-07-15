import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SpaceDirectiveModule } from 'src/app/directives/space/space.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SpaceDirectiveModule
  ],
  declarations: [
    SearchFilterComponent,
  ],
  exports: [
    SearchFilterComponent,
  ]

})
export class SearchFilterModule { }
