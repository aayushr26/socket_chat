import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFriendComponent } from './component/user-friend.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDividerModule } from '@angular/material';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null.pipe';
import { UserFriendService } from './service/user-friend.service';
import { FullNameModule } from 'src/app/pipes/full-name/full-name.pipe';
import { TableModule } from 'src/app/modules/shared/table/table.module';
import { DataLoaderModule } from 'src/app/modules/shared/components/data-loader';

const routes: Routes = [
  { path: '', component: UserFriendComponent }
]

@NgModule({
  declarations: [UserFriendComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    MatDividerModule,
    TableModule,
    SharedModule,
    CheckNullPipeModule,
    FullNameModule,
    DataLoaderModule
  ],
  providers: [UserFriendService],
  exports: [UserFriendComponent]
})
export class UserFriendModule { }
