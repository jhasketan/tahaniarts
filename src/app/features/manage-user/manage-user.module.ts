import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ManageUserRoutingModule } from './manage-user.routing';



@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    ManageUserRoutingModule
  ],
  entryComponents:[]
})
export class ManageUserModule { }
