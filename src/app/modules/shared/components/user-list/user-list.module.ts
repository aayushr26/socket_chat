import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './component/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null.pipe';
import { UserListService } from './service/user-list.service';
import { FullNameModule } from 'src/app/pipes/full-name/full-name.pipe';
import { TableModule } from '../../table/table.module';
import { DataLoaderModule } from '../data-loader';

const routes: Routes = [
  { path: '', component: UserListComponent }
]

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    TableModule,
    SharedModule,
    CheckNullPipeModule,
    FullNameModule,
    DataLoaderModule

  ],
  providers: [UserListService],
  exports: [UserListComponent]
})
export class UserListModule { }
