import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
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
