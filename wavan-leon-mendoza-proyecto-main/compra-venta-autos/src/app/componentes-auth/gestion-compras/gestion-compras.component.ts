import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {addDoc, collection, getDocs, query, where} from "@angular/fire/firestore";
import {environment} from "../../../environments/environment";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;
import { AuthService } from 'src/app/servicios/auth/auth.service';
import {MatButtonModule} from '@angular/material/button';
import {User} from "../../servicios/auth/user";

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

  user : User | undefined
  constructor() { }

  ngOnInit(): void {
    this.user =JSON.parse(localStorage.getItem('user')!)
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
    let vehCol = collection(this.db, 'carrito');
    let vehSnapshot =  query(vehCol,where('duenio', '==',this.user?.uid));
    let vehiculoQ = await getDocs(vehSnapshot)
    this.vehiculos = vehiculoQ.docs.map(doc => doc.data());
  }
}
