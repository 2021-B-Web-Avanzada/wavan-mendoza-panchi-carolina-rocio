import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {strict} from "assert";
import {addDoc, collection} from "@angular/fire/firestore";
import {initializeApp} from "firebase/app";
import {environment} from "../../../environments/environment";
import {getFirestore} from "firebase/firestore";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-vehiculo-visualizacion',
  templateUrl: './vehiculo-visualizacion.component.html',
  styleUrls: ['./vehiculo-visualizacion.component.scss']
})
export class VehiculoVisualizacionComponent implements OnInit {
  vehiculo= {
    anio: 2022,
    color: "",
    descripcion: "",
    duenio: "",
    img: "",
    kilometraje: "",
    marca: "",
    modelo: "",
    telefono: "",
    tipo: "",
  }
  w = 0
  h = 0
  mensaje: string = '';
  anadido: boolean = false;

  app = initializeApp(environment.firebase);
  db = getFirestore();
  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.obtenerInformacionVehiculo()
    this.obtenerMedidasImg()
    console.log(this.vehiculo)
  }
  obtenerInformacionVehiculo(){
    // @ts-ignore
    this.vehiculo.anio= this.route.snapshot.paramMap.get('anio')
    // @ts-ignore
    this.vehiculo.color= this.route.snapshot.paramMap.get('color')
    // @ts-ignore
    this.vehiculo.descripcion= this.route.snapshot.paramMap.get('descripcion')
    // @ts-ignore
    this.vehiculo.duenio= this.route.snapshot.paramMap.get('duenio')
    // @ts-ignore
    this.vehiculo.img= this.route.snapshot.paramMap.get('img')
    // @ts-ignore
    this.vehiculo.kilometraje= this.route.snapshot.paramMap.get('kilometraje')
    // @ts-ignore
    this.vehiculo.marca= this.route.snapshot.paramMap.get('marca')
    // @ts-ignore
    this.vehiculo.modelo= this.route.snapshot.paramMap.get('modelo')
    // @ts-ignore
    this.vehiculo.telefono= this.route.snapshot.paramMap.get('telefono')
    // @ts-ignore
    this.vehiculo.tipo= this.route.snapshot.paramMap.get('tipo')
  }


  obtenerMedidasImg(){
    let img =new Image()
    img.src = this.vehiculo.img
    var height = img.height
    var width = img.width
    width = width*400/height
    this.h = 400
    this.w = width
  }

  async anadirAlCarro() {
    let docRef = await addDoc(collection(this.db, "carrito"), {
      anio: this.vehiculo.anio,
      color: this.vehiculo.anio,
      descripcion: this.vehiculo.anio,
      duenio: this.authService.userData.uid,
      img: this.vehiculo.img,
      kilometraje: this.vehiculo.kilometraje,
      marca: this.vehiculo.marca,
      modelo: this.vehiculo.modelo,
      telefono: this.vehiculo.telefono,
      tipo: this.vehiculo.tipo,
    });
    this.mensaje = "Vehículo añadido al carrito"
    this.anadido = true
  }
}
