import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SETTINGS, USERS, CHAT, } from '../../constant/routes/routes';


const routes: Routes = [{
    path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: CHAT },
        { path: CHAT, loadChildren: () => import('../features/chat/chat.module').then(m => m.ChatModule) },
        { path: USERS, loadChildren: () => import('./../features/user/user.module').then(m => m.UserModule) },
        { path: SETTINGS, loadChildren: () => import('./../features/admin/admin.module').then(m => m.AdminModule) },
    ]
},
];

@NgModule({
    imports: [RouterModule.forChild(routes),],
    exports: [RouterModule],
})
export class LayoutRoutingModule {

}
