import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {WebsocketsService} from '../../servicios/websockets/websockets.service';

@Component({
  selector: 'app-juego-sala',
  templateUrl: './juego-sala.component.html',
  styleUrls: ['./juego-sala.component.scss']
})
export class JuegoSalaComponent implements OnInit {
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

  }

}
