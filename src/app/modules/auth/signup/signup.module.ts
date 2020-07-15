import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './component/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SignupService } from './service/signup.service';
import { ControlErrorPipe, ErrorMessageModule } from 'src/app/pipes/control-error/control-error.pipe';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { VerifyOtpModule } from '../../shared/components/verify-otp/verify-otp.module';

const routes: Routes = [
  { path: '', component: SignupComponent }
]

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    SharedModule,ValidationErrorPipeModule,ErrorMessageModule,VerifyOtpModule
  ],
  providers: [SignupService]
})
export class SignupModule { }
