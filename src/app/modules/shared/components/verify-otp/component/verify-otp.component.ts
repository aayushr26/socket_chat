import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { VerifyOtpService } from '../service/verify-otp.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  constructor(private dialogRef: MatDialogRef<VerifyOtpComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _service: VerifyOtpService
  ) { }

  ngOnInit() {
  }
  //---------- otp auto focus input -------------

  keytab(event: any, val: any) {
    if (event.which !== 8 && event.which !== 37 && event.which !== 46) {
      const nextInput = event.srcElement.nextElementSibling;
      if (nextInput !== null) {
        nextInput.focus();
      }
    }
    else if (event.which == 37) {
      let prevInput = event.srcElement.previousElementSibling;
      if (prevInput === null) {
        return;
      } else {
        prevInput.focus();

      }
    }
  }

  onBackspace(event) {
    let prevInput = event.srcElement.previousElementSibling;
    prevInput.focus();
  }
  openSuccessModal(): void {

    const bodyVerify = {
      email: this.data,
      otp: this.otp1 + this.otp2 + this.otp3 + this.otp4
    };

    // if (bodyVerify.otp.length === 6) {
    //   this.apiHit = true;
    this._service.submit(bodyVerify).subscribe(data => {
      console.log(data);

      this.dialogRef.close(data);
    })
    // }
  }
  onNoClick(): void {
    this.dialogRef.close();

  }
}

