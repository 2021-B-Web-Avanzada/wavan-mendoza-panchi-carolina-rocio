import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {VentanaComponent} from 'src/app/componentes/ventana/ventana.component';

@Component({
  selector: 'app-ruta-main',
  templateUrl: './ruta-main.component.html',
  styleUrls: ['./ruta-main.component.scss']
})
export class RutaMainComponent implements OnInit {
  formGroup = this.fb.group({
    nombreUsuario: new FormControl('',[
      Validators.required
    ]),
    codigoSala: new FormControl('',[
      Validators.required
    ])
  });

  constructor(
    private fb: FormBuilder,
    public dialog:MatDialog,
    private enrutador:Router,

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

  unirseSala(){
    const idSala = this.formGroup.get('codigoSala');
    const nombreNuevo = this.formGroup.get('nombreUsuario');
    if(nombreNuevo){
      if(idSala){
        this.enrutador.navigate(['/'+idSala.value+'/sala/'+nombreNuevo.value]);
      }
    }
  }
}
