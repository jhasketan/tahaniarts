import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './core/authentication/components/login/login.component';
import { SignupComponent } from './core/authentication/components/signup/signup.component';
import { ForgotPasswordComponent } from './core/authentication/components/forgot-password/forgot-password.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SettingsComponent } from './core/settings/settings.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { NgxSpinnerModule} from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NotFoundComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: false
    }),
    NgxSpinnerModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
