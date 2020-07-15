import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { AccountGuard } from '../../../guards/account/account.guard';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { LoginService } from './service/login.service';
import { ErrorMessageModule } from '../../../pipes/control-error/control-error.pipe';

const routes: Routes = [
  {path: '', component: LoginComponent,canActivate:[AccountGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ValidationErrorPipeModule,
    ErrorMessageModule
  ],
  declarations: [LoginComponent],
  providers:[LoginService]
})
export class LoginModule { }
