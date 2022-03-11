import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  @ViewChild('divlvl1', { static: false }) divlvl1: ElementRef | undefined;
  @ViewChild('divlvl2', { static: false }) divlvl2: ElementRef | undefined;
  @ViewChild('divlvl3', { static: false }) divlvl3: ElementRef | undefined;
  @ViewChild('divlvl3', { static: false }) divlvl4: ElementRef | undefined;

  removeAfter: number | undefined;

  arregloColores = [{correctAnswer: false, color: "#ff9eda"}, {correctAnswer: false, color: "#ff9eda"}, {correctAnswer: false, color: "#ff9eda"}, {correctAnswer: false, color: "#ff9eda"}, {correctAnswer: true, color: "#ff91d3"},{correctAnswer: false, color: "#ff9eda"},]

  arregloColores1 = [{correctAnswer: true, color: "#c990f8"},{correctAnswer: false, color: "#d39eff"}, {correctAnswer: false, color: "#d39eff"}, {correctAnswer: false, color: "#d39eff"}, {correctAnswer: false, color: "#d39eff"}, {correctAnswer: false, color: "#d39eff"},]

  arregloColores2 = [{correctAnswer: false, color: "#90f8dc"},{correctAnswer: false, color: "#90f8dc"},{correctAnswer: true, color: "#89e8cf"}, {correctAnswer: false, color: "#90f8dc"}, {correctAnswer: false, color: "#90f8dc"},{correctAnswer: false, color: "#90f8dc"},]

  arregloColores3 = [{correctAnswer: false, color: "#c6f890"}, {correctAnswer: false, color: "#c6f890"},{correctAnswer: false, color: "#c6f890"}, {correctAnswer: false, color: "#c6f890"},{correctAnswer: false, color: "#c6f890"}, {correctAnswer: true, color: "#d0faa4"},]

  num = "#E69F";
  text = this.num.toString();

  mensajeInicio1=""

  puntaje = 0;
  salaId="";
  nombre="";

  mensaje = '';
  data = ''

  arregloSuscripciones: Subscription[] = [];
  arregloJugadores: {
    salaId: number;
    nombre: string;
    puntaje: number;
  }[] = [];


  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly WebSocketsService: WebsocketsService,
    private renderer: Renderer2
  ) { }



  @HostListener('click') pasarLvl2() {
    setTimeout(() => {
        // @ts-ignore
      this.divlvl1.nativeElement.remove();
      }, this.removeAfter=500);
  }

  @HostListener('click') pasarLvl3() {
    setTimeout(() => {
      // @ts-ignore
      this.divlvl2.nativeElement.remove();
    }, this.removeAfter=1000);
  }

  @HostListener('click') pasarLvl4() {
    setTimeout(() => {
      // @ts-ignore
      this.divlvl3.nativeElement.remove();
    }, this.removeAfter=2000);
  }

  @HostListener('click') pasarLvl5() {
    setTimeout(() => {
      // @ts-ignore
      this.divlvl4.nativeElement.remove();
    }, this.removeAfter=8000);
  }

  ngOnInit(): void {

    this.activatedRoute
      .params
      .subscribe({
        next: (parametrosDeRuta) => {
          const salaId = parametrosDeRuta['salaId'];
          const nombre = parametrosDeRuta['nombre'];
          this.salaId = salaId;
          this.nombre = nombre;
          this.arregloJugadores.push({
            'nombre': this.nombre,
            'puntaje': +this.puntaje,
            'salaId': +this.salaId
          })
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
            this.arregloJugadores.push({
              puntaje: data.puntaje,
              salaId:  data.salaId,
              nombre:  data.nombre,
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
  enviarPuntuacion(){
    this.WebSocketsService.ejecutarEventoEnviarPuntaje(
      +this.salaId,
      this.nombre,
      +this.puntaje
    );
    this.puntaje = 0;
  }

  mostrarMensaje(){
    this.mensajeInicio1='Empieza!';
    return this.mensajeInicio1;
  }



}
