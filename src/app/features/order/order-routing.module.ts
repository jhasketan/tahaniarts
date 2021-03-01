import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { LikeCartComponent } from './components/like-cart/like-cart.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProceedToCheckoutComponent } from './components/proceed-to-checkout/proceed-to-checkout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: OrderListComponent
  },
  {
    path: 'cart',
    component: AddToCartComponent
  },
  {
    path: 'wishlist',
    component: LikeCartComponent
  },
  {
    path:'proceed-to-checkout',
    component: ProceedToCheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }