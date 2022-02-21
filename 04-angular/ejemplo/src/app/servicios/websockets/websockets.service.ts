import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class WebSocketsService{
  constructor(private socket: Socket){}


  EjecutarEventoHola(){
    const resp= this.socket.emit('hola',{
      nombre: 'Carolina'
    });
    console.log(resp);
    }


    EscucharEventoHola() {
    return this.socket.fromEvent('EscucharEventoHola');
    }

    //Emitir  evento: Unirse Sala
  EjecutarEventoUnirseSala(salaId: number, nombre : string){
    const resp = this.socket.emit(
      'UnirseSala',
      {salaId, nombre}
    );
  }

  EscucharEventoUnirseSala() {
    return this.socket.fromEvent('EscucharEventoUnirseSala');
  }

  EjecutarEventoEnviarMensaje(salaId: number, nombre: string, mensaje: string) {
    // Emitimos un evento
    this.socket.emit(
      'EnviarMensaje', {
        nombre,
        salaId,
        mensaje
      });
  }
  EscucharEventoMensajeSala(){
    return this.socket.fromEvent('EscucharEventoMensajeSala')
  }
}





















