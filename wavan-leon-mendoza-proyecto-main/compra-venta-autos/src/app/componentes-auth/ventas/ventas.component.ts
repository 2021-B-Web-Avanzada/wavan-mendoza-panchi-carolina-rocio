import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { initializeApp } from 'firebase/app';
import {DocumentData, getFirestore } from 'firebase/firestore';
import {AuthService} from "../../servicios/auth/auth.service";
import {environment} from "../../../environments/environment";
import {addDoc, collection, getDocs, query, where} from "@angular/fire/firestore";

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();

  anios: number[] =[]
  tipo :DocumentData[] =[]
  marca :DocumentData[] =[]

  formGroup = this.fb.group({
    userEmail: new FormControl('',[
      Validators.required
    ]),
    userPass: new FormControl('',[
      Validators.required
    ])
  });

  constructor(
    private enrutador:Router,
    private fb: FormBuilder,
    public auth: AuthService,
    ) { }

  ngOnInit(): void {
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
}
