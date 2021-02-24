import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './core/authentication/components/forgot-password/forgot-password.component';
import { LoginComponent } from './core/authentication/components/login/login.component';
import { SignupComponent } from './core/authentication/components/signup/signup.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SettingsComponent } from './core/settings/settings.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'painting',
    loadChildren: () =>
      import("./features/painting/painting.module").then(m => m.PaintingModule),
    canActivate: [AuthGuard],
  },
  {
    path:'order',
    loadChildren: () =>
    import("./features/order/order.module").then(m => m.OrderModule),
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
