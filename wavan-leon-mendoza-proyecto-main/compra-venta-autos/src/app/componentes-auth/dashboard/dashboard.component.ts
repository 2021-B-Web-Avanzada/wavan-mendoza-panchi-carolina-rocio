import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {addDoc, collection} from "@angular/fire/firestore";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore();
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }


}
