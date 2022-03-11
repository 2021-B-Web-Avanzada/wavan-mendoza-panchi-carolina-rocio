import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {addDoc, collection, getDocs, query, where} from "@angular/fire/firestore";
import {environment} from "../../../environments/environment";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;
import { Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //para la base
  app = initializeApp(environment.firebase);
  db = getFirestore();

  //--
  anios: number[] =[]
  tipo :DocumentData[] =[]
  marca :DocumentData[] =[]
  vehiculos :DocumentData[] =[]
  anioFiltro: string ="Todos";
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerTipo()
    this.obtenerMarca()
    this.obtenerAnios()
    this.obtenerVehiculos()
  }

  async obtenerTipo(){
    let tipoCol = collection(this.db, 'tipo');
    let tipoSnapshot = await getDocs(tipoCol);
    this.tipo = tipoSnapshot.docs.map(doc => doc.data());
  }

  async obtenerMarca(){
    let marcaCol = collection(this.db, 'marca');
    let marcaSnapshot = await getDocs(marcaCol);
    this.marca = marcaSnapshot.docs.map(doc => doc.data());
  }
  obtenerAnios(){
    for (var i = 1; i<50 ; i++){
      this.anios.push(i)
    }
  }
  async obtenerVehiculos(){
    this.anioFiltro = "Todos"
    let vehCol = collection(this.db, 'vehiculos');
    let vehSnapshot = await getDocs(vehCol);
    this.vehiculos = vehSnapshot.docs.map(doc => doc.data());
  }


  async filtrarAnio(anio: number) {
    this.anioFiltro = anio.toString()
    this.vehiculos = []
    let vehCol = collection(this.db, 'vehiculos');
    let vehSnapshot =  query(vehCol,where('anio', '==',anio.toString()));
    let vehiculoQ = await getDocs(vehSnapshot)
    this.vehiculos = vehiculoQ.docs.map(doc => doc.data())
  }

  async filtrarPorTipo(tipo:string) {
    this.vehiculos = []
    let vehCol = collection(this.db, 'vehiculos');
    let vehSnapshot =  query(vehCol,where('tipo', '==',tipo));
    let vehiculoQ = await getDocs(vehSnapshot)
    this.vehiculos = vehiculoQ.docs.map(doc => doc.data())
  }

  async filtrarPorMarca(marca:string) {
    this.vehiculos = []
    let vehCol = collection(this.db, 'vehiculos');
    let vehSnapshot =  query(vehCol,where('marca', '==',marca));
    let vehiculoQ = await getDocs(vehSnapshot)
    this.vehiculos = vehiculoQ.docs.map(doc => doc.data())

  }

  verAuto(vehiculo:DocumentData) {
    this.router.navigate(['/vehiculo',
      { anio: vehiculo['anio'],
        color: vehiculo['color'],
        descripcion: vehiculo['descripcion'],
        duenio: vehiculo['duenio'],
        img: vehiculo['img'],
        kilometraje: vehiculo['kilometraje'],
        marca: vehiculo['marca'],
        modelo: vehiculo['modelo'],
        telefono: vehiculo['telefono'],
        tipo: vehiculo['tipo']
      }
    ])
  }
}
