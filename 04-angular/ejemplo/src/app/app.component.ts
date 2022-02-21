import { Component, OnInit } from '@angular/core';
import{WebSocketsService} from './servicios/websockets/websockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ejemplo';

  constructor(
    private readonly websocketsService: WebSocketsService
  ) {
  }

  eventoHola(){
    this.websocketsService.EjecutarEventoHola()
  }

  ngOnInit(){
    this.websocketsService.EscucharEventoHola()
      .subscribe({
        next:(data) => {
          console.log(data);
        },
        error:(error) => {
          console.error(error);
        }
      });
  }
}

















