import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryListComponent } from './components/query-list/query-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'queries-list',
    pathMatch: 'full',
  },
  {
    path: 'queries-list',
    component: QueryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
