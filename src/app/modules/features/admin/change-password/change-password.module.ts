import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ChangePasswordComponent } from './component/change-password.component';
import { ValidationErrorPipeModule } from '../../../../pipes/validation-error/validation-error-pipe.module';
import { ErrorMessageModule } from '../../../../pipes/control-error/control-error.pipe';

const routes: Routes = [
  { path: '', component:ChangePasswordComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    ValidationErrorPipeModule,
    ErrorMessageModule
  ],
  declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
