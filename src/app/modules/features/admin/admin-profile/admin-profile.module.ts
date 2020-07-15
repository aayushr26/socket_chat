import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AdminProfileComponent } from './component/admin-profile.component';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null.pipe';
// import { DataLoaderModule } from 'src/app/modules/shared/components/data-loader';
const routes: Routes = [
  { path: '', component: AdminProfileComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule, CheckNullPipeModule,
    // DataLoaderModule
  ],
  declarations: [AdminProfileComponent]
})
export class AdminProfileModule { }
