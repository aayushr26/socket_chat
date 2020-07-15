import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTooltipModule, MatSelectModule, MatOptionModule, MatPaginatorModule, MatExpansionModule, MatCheckboxModule, MatDialogModule, MatSortModule } from '@angular/material';
import { DateFilterModule } from '../../layout/layout-shared/date-filter/date-filter.module';
import { SearchFilterModule } from '../../layout/layout-shared/search-filter/search-filter.module';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCheckboxModule,
    DateFilterModule,
    MatDialogModule,
    SearchFilterModule,
    MatSortModule
  ],
  exports:[
    MatTableModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCheckboxModule,
    DateFilterModule,
    MatDialogModule,
    SearchFilterModule,
    MatSortModule
  ]
})
export class TableModule { }
