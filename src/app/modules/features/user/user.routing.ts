import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { USER_LIST} from 'src/app/constant/routes/routes';
import { HOME_GUARD } from '../../../constant/route-guards/route-guards';


const routes: Routes = [
    {
             path: '', component: UserComponent, children: [
            { path: '', redirectTo: USER_LIST, pathMatch: 'full' },
            { path: USER_LIST, loadChildren:()=> import('./user-listing/user-listing.module').then(m=>m.UserListingModule),...HOME_GUARD },
            { path: `:id`, loadChildren: ()=> import ('./user-detail/user-detail.module').then(m =>m.UserDetailModule),...HOME_GUARD }, 
           
            
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class UserRouting {

}

