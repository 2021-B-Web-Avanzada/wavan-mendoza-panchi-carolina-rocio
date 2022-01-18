import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaSearchComponent } from './rutas/ruta-search/ruta-search.component';
import { RutaWatchlistComponent } from './rutas/ruta-watchlist/ruta-watchlist.component';
import { RutaOriginalsComponent } from './rutas/ruta-originals/ruta-originals.component';
import { RutaMoviesComponent } from './rutas/ruta-movies/ruta-movies.component';
import { RutaSeriesComponent } from './rutas/ruta-series/ruta-series.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import {NavBarModule} from "./componentes/nav-bar/nav-bar.module";
import {CarouselModule} from "./componentes/carousel/carousel.module";
import {PrincipalSectionModule} from "./componentes/principal-section/principal-section.module";
import { RecommendedSectionModule } from "./componentes/recommended-section/recommended-section.module";
import {SearchBarModule} from "./componentes/search-bar/search-bar.module";
import {CollectionModule} from "./componentes/collection/collection.module";
import {InfoModule} from "./componentes/info/info.module";

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaSearchComponent,
    RutaWatchlistComponent,
    RutaOriginalsComponent,
    RutaMoviesComponent,
    RutaSeriesComponent,
    RutaNotFoundComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavBarModule,
        CarouselModule,
        PrincipalSectionModule,
        RecommendedSectionModule,
        SearchBarModule,
        CollectionModule,
        InfoModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
