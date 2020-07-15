import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password.component';
import { AccountGuard } from '../../../guards/account/account.guard';
import { ValidationErrorPipeModule } from '../../../pipes/validation-error/validation-error-pipe.module';
import { ErrorMessageModule } from '../../../pipes/control-error/control-error.pipe';

const routes: Routes = [
  { path: '', component: ForgotPasswordComponent, canActivate: [AccountGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ValidationErrorPipeModule,
    ErrorMessageModule
  ],
  declarations: [ForgotPasswordComponent],

})
export class ForgotPasswordModule { }
