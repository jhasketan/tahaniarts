import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-profile',
    pathMatch: 'full',
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUserRoutingModule { }
