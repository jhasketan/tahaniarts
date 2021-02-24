import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingListComponent } from './components/painting-list/painting-list.component';
import { PaintingFormComponent } from './components/painting-form/painting-form.component';
import { PaintingRoutingModule } from './painting-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaintingReviewComponent } from './components/painting-review/painting-review.component';
import { PaintingEditPreviewComponent } from './components/painting-edit-preview/painting-edit-preview.component';
@NgModule({
  declarations: [PaintingListComponent, PaintingFormComponent, PaintingReviewComponent, PaintingEditPreviewComponent],
  imports: [
    CommonModule,
    PaintingRoutingModule,
    FormsModule
  ],
  entryComponents:[]
})
export class PaintingModule { }
