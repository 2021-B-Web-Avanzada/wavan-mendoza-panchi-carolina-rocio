import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaMainComponent} from './rutas/ruta-main/ruta-main.component';
import {JuegoSalaComponent} from './rutas/juego-sala/juego-sala.component';

const routes: Routes = [
  {
    path: 'main',
    component: RutaMainComponent,
  },
  {
    path: ':salaId/sala/:nombre',
    component: JuegoSalaComponent,
  },
  {
    path:'',
    redirectTo: '/main',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
