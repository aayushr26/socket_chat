import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationForgotComponent } from './component/confirmation-forgot.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.pipe';

const routes: Routes = [
  {
    path: '', component: ConfirmationForgotComponent
  }
]

@NgModule({
  declarations: [ConfirmationForgotComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,AbsoluteRoutingModule
  ]
})
export class ConfirmationForgotModule { }
