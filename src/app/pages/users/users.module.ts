import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesModule } from 'src/app/components/tables/tables.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [UsersDashboardComponent],
  imports: [
    CommonModule,
    TablesModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [UsersDashboardComponent]
})
export class UsersModule { }
