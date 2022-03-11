import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

    obtenerNombreUsuario(email: string) {
        let indice = email.indexOf('@')
        return email.substring(0,indice);
    }
}
