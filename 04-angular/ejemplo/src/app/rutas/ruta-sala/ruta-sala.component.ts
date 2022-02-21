import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {WebSocketsService} from '../../servicios/websockets/websockets.service';

@Component({
  selector: 'app-ruta-sala',
  templateUrl: './ruta-sala.component.html',
  styleUrls: ['./ruta-sala.component.scss']
})
export class RutaSalaComponent implements OnInit, OnDestroy {
  salaId="";
  nombre="";
  mensaje = "";
  arregloSuscripciones: Subscription[] = [];
  arregloMensajes: {
    salaId: number;
    nombre: string;
    mensaje: string;
    posicion: 'izq' | 'der';
  }[] = [];

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly WebSocketsService: WebSocketsService,

  ) {
    console.log('Constructor')
  }

  enviarMensaje() {
    this.arregloMensajes.push({
      mensaje: this.mensaje,
      salaId: +this.salaId,
      nombre: this.nombre,
      posicion: 'der'
    })
    this.WebSocketsService.EjecutarEventoEnviarMensaje(
      +this.salaId, this.nombre, this.mensaje
    );
    this.mensaje = '';
  }

  ngOnInit(): void {
    console.log('Init')
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
      .EscucharEventoMensajeSala()
      .subscribe(
        {
          next: (data: any) => {
            console.log('Enviaron Mensaje', data);
            this.arregloMensajes.push({
              mensaje: data.mensaje,
              salaId: data.salaId,
              nombre: data.nombre,
              posicion: data.nombre === this.nombre
                ? 'der' : 'izq'
            })
          },
          error: (error) => {
            console.error({error});
          }
        }
      );
    const respEscucharEventoUnirseSala = this.WebSocketsService
      .EscucharEventoUnirseSala()
      .subscribe(
        {
          next: (data) => {
            console.log('Alguien entro', data);
          },
          error: (error) => {
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
    this.WebSocketsService.EjecutarEventoUnirseSala(+this.salaId, this.nombre);
  }

  desSuscribirse() {
    this.arregloSuscripciones.forEach(
      (suscripcion) => {
        suscripcion.unsubscribe();
      }
    );
    this.arregloSuscripciones = [];
  }

  ngOnDestroy(): void {
    console.log('Destroy')
  }
}
