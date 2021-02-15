import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingListComponent } from './components/painting-list/painting-list.component';
import { PaintingFormComponent } from './components/painting-form/painting-form.component';
import { PaintingRoutingModule } from './painting-routing.module';

@NgModule({
  declarations: [PaintingListComponent, PaintingFormComponent],
  imports: [
    CommonModule,
    PaintingRoutingModule
  ]
})
export class PaintingModule { }
