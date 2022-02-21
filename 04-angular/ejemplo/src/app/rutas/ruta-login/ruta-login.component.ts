import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  mostrarSegundoBanner=true;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarOcultarBanner(){
    this.mostrarSegundoBanner =! this.mostrarSegundoBanner;
  }
  arregloUsuarios = [
    {
      id:1,
      nombre: "Carolina",
      color:"#Ff85c0",
      link:"https://www.sanrio.com/collections/my-melody",
      linkImagen:"https://a.wattpad.com/useravatar/0shinA.256.522530.jpg"
    },
    {
      id:2,
      nombre: "Estefany",
      color:"#85FFF9",
      link:"https://hellokitty.fandom.com/wiki/Cinnamoroll",
      linkImagen:"https://up.quizlet.com/22n7o6-42yhZ-256s.jpg"
    }
    ]
}
