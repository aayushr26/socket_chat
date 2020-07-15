import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyOtpComponent } from './component/verify-otp.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [VerifyOtpComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[VerifyOtpComponent]
})
export class VerifyOtpModule { }
