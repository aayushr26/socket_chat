import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './component/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null.pipe';
import { TableModule } from '../../table/table.module';
import { PostListService } from './service/post-list.service';
import { DataLoaderModule } from '../data-loader';

const routes: Routes = [
  { path: '', component: PostListComponent }
]

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    SharedModule,
    CheckNullPipeModule,
    TableModule,
    DataLoaderModule
  ],
  exports: [PostListComponent],
  providers:[PostListService]
})
export class PostListModule { }
