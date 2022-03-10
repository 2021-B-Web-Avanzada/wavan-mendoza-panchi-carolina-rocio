import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirculoComponent } from 'src/app/componentes/circulo/circulo/circulo.component';


@NgModule({
  declarations: [
    CirculoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CirculoComponent
  ]
})
export class CirculoModule { }
