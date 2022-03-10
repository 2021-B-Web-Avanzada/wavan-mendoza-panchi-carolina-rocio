import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from "./servicios/auth/auth.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../environments/environment";
import { DashboardComponent } from './componentes-auth/dashboard/dashboard.component';
import { SignInComponent } from './componentes-auth/sign-in/sign-in.component';
import { VerifyEmailComponent } from './componentes-auth/verify-email/verify-email.component';
import { SignUpComponent } from './componentes-auth/sign-up/sign-up.component';
import {ForgotPasswordComponent} from "./componentes-auth/forgot-password/forgot-password.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
