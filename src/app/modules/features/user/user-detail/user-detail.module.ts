import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './component/user-detail.component';
import { MatCardModule, MatDividerModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null.pipe';
import { UserDetailService } from './service/user-detail.service';
import { UserDetailRouting } from './user-detail.routing';
import { FullNameModule } from 'src/app/pipes/full-name/full-name.pipe';
import { PostListModule } from 'src/app/modules/shared/components/post-list/post-list.module';
import { UserFriendModule } from './user-friend/user-friend.module';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    SharedModule,
    CheckNullPipeModule,
    MatTabsModule,
    MatTooltipModule,
    UserDetailRouting,
    FullNameModule,
    CheckNullPipeModule,
    PostListModule,
    UserFriendModule
  ],
  providers: [UserDetailService]
})
export class UserDetailModule { }
