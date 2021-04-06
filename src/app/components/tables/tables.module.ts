import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableUsersComponent } from './table-users/table-users.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [TableBasicComponent, TableUsersComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    TableBasicComponent,
    TableUsersComponent
  ]
})
export class TablesModule { }
