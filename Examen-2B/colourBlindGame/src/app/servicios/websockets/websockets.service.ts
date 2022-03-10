import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {
  constructor(private socket: Socket) {
  }

  ejecutarEventoUnirseSala(salaId:number, nombre: string){
    const resp = this.socket.emit('unirseSala',
    {salaId, nombre});
  }

  escucharEventoUnirseSala() {
    return this.socket.fromEvent('escucharEventoUnirseSala');
  }

  seleccionarColor(nombre:string, idSala:string, carta:string|number){
    this.socket.emit(
      'colorSeleccionado',
      {
        nombre:nombre,
        idJuego:idSala,
        carta:carta
      }
    )
  }

  escucharColorSeleccionado(){
    return this.socket.fromEvent('escucharColorSeleccionado')
  }


  ejecutarEventoEnviarMensaje(salaId: number, nombre:string, mensaje: string){
    this.socket.emit(
      'enviarMensaje',{
        nombre,
        salaId,
        mensaje
      }
    );
  }

  escucharEventoMensajeSala(){
    return this.socket.fromEvent('escucharEventoMensajeSala')
  }
}
