import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ADMIN_PROFILE, EDIT_PROFILE, CHANGE_PASSWORD } from '../../../constant/routes/routes';
import { HomeGuard } from 'src/app/guards/home/home.guard';


const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            { path: '', redirectTo: ADMIN_PROFILE, pathMatch: 'full' },
            { path: ADMIN_PROFILE, loadChildren: ()=> import('./admin-profile/admin-profile.module').then(m=>m.AdminProfileModule) },
            { path: EDIT_PROFILE, loadChildren: ()=> import('./edit-profile/edit-profile.module').then(m=>m.EditProfileModule), canLoad: [HomeGuard], canActivate: [HomeGuard] },
            { path: CHANGE_PASSWORD, loadChildren: ()=> import('./change-password/change-password.module').then(m=>m.ChangePasswordModule), canLoad: [HomeGuard], canActivate: [HomeGuard] }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AdminRouting {

}

