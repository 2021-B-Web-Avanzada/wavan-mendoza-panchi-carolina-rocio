import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {RutaMainComponent} from '../../rutas/ruta-main/ruta-main.component';

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.component.html',
  styleUrls: ['./ventana.component.scss']
})
export class VentanaComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA)
    public data: any,
    public dialogRef:MatDialogRef<RutaMainComponent>
  ) { }

  ngOnInit(): void {
  }
cerrarDialogo(){
    this.dialogRef.close()
}
}
