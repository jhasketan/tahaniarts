import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingListComponent } from './components/painting-list/painting-list.component';
import { PaintingFormComponent } from './components/painting-form/painting-form.component';
import { PaintingRoutingModule } from './painting-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaintingReviewComponent } from './components/painting-review/painting-review.component';
@NgModule({
  declarations: [PaintingListComponent, PaintingFormComponent, PaintingReviewComponent],
  imports: [
    CommonModule,
    PaintingRoutingModule,
    FormsModule
  ],
  entryComponents:[PaintingFormComponent]
})
export class PaintingModule { }
