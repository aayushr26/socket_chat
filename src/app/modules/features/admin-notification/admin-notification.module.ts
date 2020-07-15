import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNotificationComponent } from './component/admin-notification.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes :Routes=[
  {path:'',component:AdminNotificationComponent}
]

@NgModule({
  declarations: [AdminNotificationComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class AdminNotificationModule { }
