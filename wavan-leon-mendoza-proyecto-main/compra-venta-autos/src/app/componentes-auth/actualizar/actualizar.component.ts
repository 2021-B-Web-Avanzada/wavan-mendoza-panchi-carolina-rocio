import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {collection, doc, getDoc, getDocs, updateDoc} from "@angular/fire/firestore";
import {DocumentData, getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {environment} from "../../../environments/environment";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
  ) { }
  tipo :DocumentData[]  =[]
  marca :DocumentData[] =[]
  anios: number[] =[]
  anio:string =""
  mensaje: string  ="";
  idPub = ""
  pub:DocumentData  = []
  ngOnInit(): void {
    this.idPub = this.route.snapshot.paramMap.get('id')!!;
    this.obtenerPublicacion()

    this.obtenerAnios()
    this.obtenerMarca()
    this.obtenerTipo()

  }

  async obtenerPublicacion(){
    let docRef = doc(this.db, "vehiculos", this.idPub);
    let docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    this.pub =docSnap.data()!!
    this.setearAnio()
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

  setearAnio(){
    this.anio =this.pub['anio'].toString()
  }

  async actualizarPublicacion(tipoc:string, marcac:string,kilometraje:string,color:string,foto:string,modelo:string,anio:string,descripcion:string,telefono:string) {
    let refDoc = doc(this.db, "vehiculos", this.idPub);
    await updateDoc(refDoc,{
      anio: anio,
      color: color,
      descripcion: descripcion,
      duenio: this.auth.userData.uid,
      img: foto,
      kilometraje: kilometraje,
      marca: marcac,
      modelo: modelo,
      telefono: telefono,
      tipo: tipoc,
    })
  this.mensaje = "Publicación realizada"
  }
}
