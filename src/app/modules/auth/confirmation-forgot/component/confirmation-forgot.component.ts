import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from '../../forgot-password/service/forgot-password.service';
import { Router } from '@angular/router';
import { FORGOT_PASSWORD } from 'src/app/constant/absolute-routes/absolute-routes';
import { LOGO } from 'src/app/constant/messages/messages';

@Component({
  selector: 'app-confirmation-forgot',
  templateUrl: './confirmation-forgot.component.html',
  styleUrls: ['./confirmation-forgot.component.scss', '../../login/component/login.component.scss']
})
export class ConfirmationForgotComponent implements OnInit {

  logo=LOGO;
  email: string;
  otpTime: string = '00:30'; otp: any; interval; timer: string;
  resendButton: boolean = true;
  constructor(
    private _forgotService: ForgotPasswordService, private route: Router
  ) { }

  ngOnInit() {
    this._forgotService.email.subscribe(res => {
      if (res) {
        this.email = res;
      }
      else {
        this.route.navigate([FORGOT_PASSWORD])
      }
    })
    this.reverseTiming();
  }

  reverseTiming() {
    this.otp = null;
    this.timer = this.otpTime;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      let timer: any = this.timer;
      timer = timer.split(':');
      let minutes = timer[0];
      let seconds = timer[1];
      seconds -= 1;
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      this.timer = minutes + ':' + seconds;
      if (seconds == 0) {
        clearInterval(this.interval);
        this.resendButton = false
      }
    }, 1000);
  }

  resend() {
    const data = {
      email: this.email
    }
    
    this._forgotService.validateEmail(data).subscribe(
      res => {
        this.reverseTiming();
        this.resendButton = true;
      },
      err => {})
  }

}
