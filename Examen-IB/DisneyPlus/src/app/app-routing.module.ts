import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaSearchComponent} from "./rutas/ruta-search/ruta-search.component";
import {RutaWatchlistComponent} from "./rutas/ruta-watchlist/ruta-watchlist.component";
import {RutaMoviesComponent} from "./rutas/ruta-movies/ruta-movies.component";
import {RutaSeriesComponent} from "./rutas/ruta-series/ruta-series.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaOriginalsComponent} from "./rutas/ruta-originals/ruta-originals.component";

const routes: Routes = [
  {
    path:"home",
    component:RutaHomeComponent
  },
  {
    path:"search",
    component:RutaSearchComponent
  },
  {
    path:"watchlist",
    component:RutaWatchlistComponent
  },
  {
    path:"originals",
    component:RutaOriginalsComponent
  },
  {
    path:"movies",
    component:RutaMoviesComponent
  },
  {
    path:"series",
    component:RutaSeriesComponent
  },
  {
    path:"not-found",
    component:RutaNotFoundComponent
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:RutaNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
