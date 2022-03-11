import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./componentes-auth/sign-in/sign-in.component";
import {DashboardComponent} from "./componentes-auth/dashboard/dashboard.component";
import {VerifyEmailComponent} from "./componentes-auth/verify-email/verify-email.component";
import {SignUpComponent} from "./componentes-auth/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./componentes-auth/forgot-password/forgot-password.component";
import { VentasComponent } from './componentes-auth/ventas/ventas.component';
import { ActualizarComponent } from './componentes-auth/actualizar/actualizar.component';
import { GestionVentasComponent } from './componentes-auth/gestion-ventas/gestion-ventas.component';

import {AuthGuard} from "./servicios/guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'actualizar', component: ActualizarComponent },
  { path: 'gestion-ventas', component: GestionVentasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
