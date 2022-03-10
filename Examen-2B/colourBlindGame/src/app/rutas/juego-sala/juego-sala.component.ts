import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {WebsocketsService} from '../../servicios/websockets/websockets.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-juego-sala',
  templateUrl: './juego-sala.component.html',
  styleUrls: ['./juego-sala.component.scss']
})
export class JuegoSalaComponent implements OnInit {

  num = "#E69F";
  text = this.num.toString();
  mensajeInicio1=""
  mensaje = "";
  salaId="";
  nombre="";
  arregloSuscripciones: Subscription[] = [];
  arregloMensajes: {
    salaId: number;
    nombre: string;
    mensaje: string;
  }[] = [];



  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly WebSocketsService: WebsocketsService,

  ) { }


  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe({
        next: (parametrosDeRuta) => {
          const salaId = parametrosDeRuta['salaId'];
          const nombre = parametrosDeRuta['nombre'];
          this.salaId = salaId;
          this.nombre = nombre;
          console.log(parametrosDeRuta);
          this.logicaSalas(this.salaId, this.nombre)
        }
      })
  }
  logicaSalas(salaId:string, nombre: string){
    this.desSuscribirse();
    const respEscucharEventoMensajeSala = this.WebSocketsService
      .escucharEventoMensajeSala()
      .subscribe(
        {
          next: (data: any) => {
            console.log('Enviaron Mensaje', data);
            this.arregloMensajes.push({
              mensaje: data.mensaje,
              salaId: data.salaId,
              nombre: data.nombre,
            })
          },
          error: (error) => {
            console.error({error});
          }
        }
      );
    const respEscucharEventoUnirseSala = this.WebSocketsService
      .escucharEventoUnirseSala()
      .subscribe(
        {
          next: (data: any) => {
            console.log('Alguien entro', data);
          },
          error: (error: any) => {
            console.error({error});
          }
        }
      );
    this.arregloSuscripciones.push(
      respEscucharEventoUnirseSala
    );
    this.arregloSuscripciones.push(
      respEscucharEventoMensajeSala
    );
    this.WebSocketsService.ejecutarEventoUnirseSala(+this.salaId, this.nombre);
  }

  desSuscribirse() {
    this.arregloSuscripciones.forEach(
      (suscripcion) => {
        suscripcion.unsubscribe();
      }
    );
    this.arregloSuscripciones = [];
  }

  mostrarMensaje(){
    this.mensajeInicio1='Empieza!';
    return this.mensajeInicio1;
  }
}
