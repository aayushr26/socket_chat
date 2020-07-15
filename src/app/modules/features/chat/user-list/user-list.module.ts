import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './component/user-list.component';
import { MatButtonModule, MatIconModule, MatBadgeModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpaceDirectiveModule } from 'src/app/directives/space/space.directive';
import { SearchFilterModule } from 'src/app/modules/layout/layout-shared/search-filter/search-filter.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null.pipe';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,MatButtonModule,MatIconModule, ReactiveFormsModule,FormsModule,SpaceDirectiveModule,SearchFilterModule,CheckNullPipeModule, MatBadgeModule
  ],
  exports:[UserListComponent]
})
export class UserListModule { }
