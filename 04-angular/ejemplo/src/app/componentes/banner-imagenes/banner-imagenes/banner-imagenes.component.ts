import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {

  nombre= 'Carolina';
  apellido='Mendoza';
  mascotas={
    pancha: {
      edad:12
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

  ejecutarEventoClick(){
    console.log({mensaje: 'click'});
  }

  ejecutarEventoBlur(){
    console.log({mensaje: 'blur'});
  }

  fecha = new Date();
  sueldo = 1000;

  @Input()
  url='https://www.google.com/';

  @Input()
  urlImagen='https://es-static.z-dn.net/files/da7/496a32b4f01647fbd24584b28d2f5443.jpg';

  @Input()
  color = '#D198F7';

}


