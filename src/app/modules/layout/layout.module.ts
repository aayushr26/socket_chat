import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout-parts/header/header.component';
import { SidebarComponent } from './layout-parts/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule, MatExpansionModule, MatBadgeModule } from '@angular/material';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    SharedModule,MatBadgeModule,BreadcrumbsModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class LayoutModule { }
