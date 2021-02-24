import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { LikeCartComponent } from './components/like-cart/like-cart.component';
import { ProceedToCheckoutComponent } from './components/proceed-to-checkout/proceed-to-checkout.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderRoutingModule } from './order-routing.module';


@NgModule({
  declarations: [AddToCartComponent,LikeCartComponent,ProceedToCheckoutComponent, OrderListComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
