import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
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
    component: OrderListComponent,canActivate:[AuthGuard]
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
    component: ProceedToCheckoutComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
