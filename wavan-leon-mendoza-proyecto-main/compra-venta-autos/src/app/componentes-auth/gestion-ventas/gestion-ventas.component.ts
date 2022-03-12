import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {addDoc, collection, deleteDoc, doc, getDocs, query, where} from "@angular/fire/firestore";
import { environment} from "../../../environments/environment";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { User } from 'src/app/servicios/auth/user';
import {MatButtonModule} from '@angular/material/button';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestion-ventas',
  templateUrl: './gestion-ventas.component.html',
  styleUrls: ['./gestion-ventas.component.scss']
})
export class GestionVentasComponent implements OnInit {
  //para la base
  app = initializeApp(environment.firebase);
  db = getFirestore();

  //--
  anios: number[] = []
  tipo: DocumentData[] = []
  marca: DocumentData[] = []
  vehiculos: DocumentData[] = []
  anioFiltro: number = 2022;
  user : User | undefined
  constructor(public authService: AuthService,
              private router: Router){}

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

  async obtenerVehiculos(){
    this.vehiculos = []
    let vehCol = collection(this.db, 'vehiculos');
    let vehSnapshot =  query(vehCol,where('duenio', '==',this.user?.uid));
    let vehiculoQ = await getDocs(vehSnapshot)
    this.vehiculos = vehiculoQ.docs.map(doc => doc.data())
  }

  async eliminar(i : number) {
    let vehCol = collection(this.db, 'vehiculos');
    let vehSnapshot =  query(vehCol,where('duenio', '==',this.user?.uid));
    let vehiculoQ = await getDocs(vehSnapshot)
    let ids = vehiculoQ.docs.map(doc => doc.id)
    let ideliminar = ids[i]
    this.eliminarDoc(ideliminar)
  }
  async eliminarDoc(id:string){
    await deleteDoc(doc(this.db, "vehiculos", id));
    this.obtenerVehiculos()
  }

  async actualizar(i: number) {
    let vehCol = collection(this.db, 'vehiculos');
    let vehSnapshot =  query(vehCol,where('duenio', '==',this.user?.uid));
    let vehiculoQ = await getDocs(vehSnapshot)
    let ids = vehiculoQ.docs.map(doc => doc.id)
    let idActualizar = ids[i]
    this.router.navigate(['/actualizar', { id: idActualizar }]);
  }
}
