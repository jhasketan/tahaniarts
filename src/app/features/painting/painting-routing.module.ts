import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingFormComponent } from './components/painting-form/painting-form.component';
import { PaintingListComponent } from './components/painting-list/painting-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: PaintingListComponent
  },
  {
    path: 'add',
    component: PaintingFormComponent
  },
  {
    path: 'edit/:id',
    component: PaintingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PaintingRoutingModule { }
