import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

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


}
