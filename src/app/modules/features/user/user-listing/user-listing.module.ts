import { CheckNullPipeModule } from '../../../../pipes/check-null/check-null.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { UserListingComponent } from './component/user-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { FullNameModule } from 'src/app/pipes/full-name/full-name.pipe';
import { TableModule } from 'src/app/modules/shared/table/table.module';
import { CustomDatePipeModule } from '../../../../pipes/custom-date/custom-date.pipe';
import { DataLoaderModule } from 'src/app/modules/shared/components/data-loader';

const routes: Routes = [
  { path: '', component: UserListingComponent }
];
@NgModule({
  declarations: [UserListingComponent],
  imports: [
    SharedModule,
    CommonModule,
    CheckNullPipeModule,
    TableModule,
    RouterModule.forChild(routes),
    FullNameModule,
    CustomDatePipeModule,
    DataLoaderModule
  ],
})
export class UserListingModule { }
