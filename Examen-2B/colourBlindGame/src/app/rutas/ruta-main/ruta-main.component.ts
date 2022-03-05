import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {VentanaComponent} from 'src/app/componentes/ventana/ventana.component';

@Component({
  selector: 'app-ruta-main',
  templateUrl: './ruta-main.component.html',
  styleUrls: ['./ruta-main.component.scss']
})
export class RutaMainComponent implements OnInit {

  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }
  abrirDialogo() {
    const referenciaDialogo = this.dialog.open(
      VentanaComponent,
      {
        disableClose: true,
        data: {
          animal: 'conejo',
        },
      }
    );
    const despuesCerrado$ = referenciaDialogo.afterClosed();
    despuesCerrado$
      .subscribe(
        (datos) => {
          console.log(datos);
        }
      );
  }
}
