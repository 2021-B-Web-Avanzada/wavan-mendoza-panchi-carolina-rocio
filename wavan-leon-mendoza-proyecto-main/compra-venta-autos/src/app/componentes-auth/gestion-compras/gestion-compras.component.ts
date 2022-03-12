import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {addDoc, collection, getDocs, query, where} from "@angular/fire/firestore";
import {environment} from "../../../environments/environment";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;
import { AuthService } from 'src/app/servicios/auth/auth.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-gestion-compras',
  templateUrl: './gestion-compras.component.html',
  styleUrls: ['./gestion-compras.component.scss']
})
export class GestionComprasComponent implements OnInit {
  //para la base
  // @ts-ignore
  app = initializeApp(environment.firebase);
  db = getFirestore();

  //--
  anios: number[] = []
  tipo: DocumentData[] = []
  marca: DocumentData[] = []
  vehiculos: DocumentData[] = []
  anioFiltro: number = 2022;

  constructor() { }

  ngOnInit(): void {
    this.obtenerTipo()
    this.obtenerMarca()
    this.obtenerVehiculos()
  }

  async obtenerTipo() {
    let tipoCol = collection(this.db, 'tipo');
    let tipoSnapshot = await getDocs(tipoCol);
    this.tipo = tipoSnapshot.docs.map(doc => doc.data());
  }

  async obtenerMarca() {
    let marcaCol = collection(this.db, 'marca');
    let marcaSnapshot = await getDocs(marcaCol);
    this.marca = marcaSnapshot.docs.map(doc => doc.data());
  }

  async obtenerVehiculos() {
    let vehCol = collection(this.db, 'vehiculos');
    let vehSnapshot = await getDocs(vehCol);
    this.vehiculos = vehSnapshot.docs.map(doc => doc.data());
  }
}
