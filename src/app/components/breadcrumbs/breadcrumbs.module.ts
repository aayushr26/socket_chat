import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.pipe';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule,RouterModule
    ,AbsoluteRoutingModule,
    MatIconModule

  
  ],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule { }
