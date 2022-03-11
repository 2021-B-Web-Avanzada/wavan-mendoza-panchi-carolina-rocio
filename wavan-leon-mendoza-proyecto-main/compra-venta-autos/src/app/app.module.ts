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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {BannerComponent} from "./componentes-banner/banner/banner.component";
<<<<<<< HEAD
import { VehiculoVisualizacionComponent } from './componentes-auth/vehiculo-visualizacion/vehiculo-visualizacion.component';
=======
import { VentasComponent } from './componentes-auth/ventas/ventas.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ActualizarComponent } from './componentes-auth/actualizar/actualizar.component';
import { GestionVentasComponent } from './componentes-auth/gestion-ventas/gestion-ventas.component';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    BannerComponent,
<<<<<<< HEAD
    VehiculoVisualizacionComponent
=======
    VentasComponent,
    ActualizarComponent,
    GestionVentasComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
