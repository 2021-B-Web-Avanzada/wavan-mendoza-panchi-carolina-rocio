import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {addDoc, collection, getDocs, query, where} from "@angular/fire/firestore";
import {environment} from "../../../environments/environment";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

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
  anioFiltro: number =2022;
  constructor(
    public authService: AuthService,
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
    let vehCol = collection(this.db, 'vehiculos');
    let vehSnapshot = await getDocs(vehCol);
    this.vehiculos = vehSnapshot.docs.map(doc => doc.data());
  }


  filtrarAnio(anio: number) {
    this.anioFiltro = anio
  }

  async filtrarPorTipo(tipo:string) {

  }

  filtrarPorMarca(marca:string) {

  }
}
