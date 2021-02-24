import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingListComponent } from './components/painting-list/painting-list.component';
import { PaintingFormComponent } from './components/painting-form/painting-form.component';
import { PaintingRoutingModule } from './painting-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaintingReviewComponent } from './components/painting-review/painting-review.component';
import { PaintingEditPreviewComponent } from './components/painting-edit-preview/painting-edit-preview.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { LikeCartComponent } from './components/like-cart/like-cart.component';
import { ProceedToCheckoutComponent } from './components/proceed-to-checkout/proceed-to-checkout.component';
@NgModule({
  declarations: [PaintingListComponent, PaintingFormComponent, PaintingReviewComponent, PaintingEditPreviewComponent, AddToCartComponent, LikeCartComponent, ProceedToCheckoutComponent],
  imports: [
    CommonModule,
    PaintingRoutingModule,
    FormsModule
  ],
  entryComponents:[PaintingFormComponent]
})
export class PaintingModule { }
