import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountGuard } from './guards/account/account.guard';
import { HomeGuard } from './guards/home/home.guard';
import { ACCOUNT } from './constant/routes/routes';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: "full", },
  { path: ACCOUNT, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), canLoad: [AccountGuard], canActivate: [AccountGuard] },
  { path: '', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule), canLoad: [HomeGuard], canActivate: [HomeGuard] },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { scrollPositionRestoration: 'top' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
