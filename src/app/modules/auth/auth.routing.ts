import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LOGIN, FORGOT_PASSWORD, RESET_PASSWORD , CONFIRM_FORGOT_PASSWORD, SIGNUP} from '../../constant/routes/routes';
import { AccountGuard } from '../../guards/account/account.guard';


const accountRoutes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            {path: '', redirectTo: SIGNUP, pathMatch: 'full'},
            {path: SIGNUP, loadChildren: ()=> import('./signup/signup.module').then(m=>m.SignupModule), canLoad: [AccountGuard], canActivate: [AccountGuard]},
            {path: LOGIN, loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule), canLoad: [AccountGuard], canActivate: [AccountGuard]},
            {path: CONFIRM_FORGOT_PASSWORD, loadChildren: ()=> import('./confirmation-forgot/confirmation-forgot.module').then(m=> m.ConfirmationForgotModule), canLoad: [AccountGuard], canActivate: [AccountGuard]},
            {path: FORGOT_PASSWORD, loadChildren: ()=> import('./forgot-password/forgot-password.module').then(m=> m.ForgotPasswordModule), canLoad: [AccountGuard], canActivate: [AccountGuard]},
            {path: `${RESET_PASSWORD}/:token`, loadChildren:()=> import('./reset-password/reset-password.module').then(m=>m.ResetPasswordModule), canLoad: [AccountGuard], canActivate: [AccountGuard] },
           
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(
            accountRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []

})

export class AuthRouting {

}
