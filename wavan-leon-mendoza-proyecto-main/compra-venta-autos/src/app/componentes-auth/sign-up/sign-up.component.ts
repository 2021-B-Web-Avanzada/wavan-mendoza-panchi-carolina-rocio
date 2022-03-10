import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formGroup = this.fb.group({
    userEmail: new FormControl('',[
      Validators.required
    ]),
    userPass: new FormControl('',[
      Validators.required
    ])
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
