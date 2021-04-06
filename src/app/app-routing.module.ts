import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UsersDashboardComponent } from './pages/users/users-dashboard/users-dashboard.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'tasks', component: TasksComponent
  },
  {
    path: 'users', component: UsersDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
