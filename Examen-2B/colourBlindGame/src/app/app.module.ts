import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SocketIoModule} from 'ngx-socket-io';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {JuegoSalaComponent} from './rutas/juego-sala/juego-sala.component';
import {RutaMainComponent} from './rutas/ruta-main/ruta-main.component';
import {NavBarModule} from 'src/app/componentes/nav-bar/nav-bar.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {VentanaComponent} from './componentes/ventana/ventana.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoSalaComponent,
    RutaMainComponent,
    VentanaComponent,
  ],
  imports: [
    BrowserModule,
    NavBarModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    SocketIoModule.forRoot({
      url:'ws://localhost:8080',
      options:{}
    }),
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
