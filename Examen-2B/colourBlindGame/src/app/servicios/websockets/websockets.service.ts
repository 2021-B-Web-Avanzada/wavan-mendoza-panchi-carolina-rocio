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

  ejecutarEventoEnviarPuntaje(salaId: number, nombre:string, puntaje:number){
    this.socket.emit(
      'enviarMensaje',{
        nombre,
        salaId,
        puntaje
      }
    );
  }

  escucharEventoMensajeSala(){
    return this.socket.fromEvent('escucharEventoMensajeSala')
  }
}
