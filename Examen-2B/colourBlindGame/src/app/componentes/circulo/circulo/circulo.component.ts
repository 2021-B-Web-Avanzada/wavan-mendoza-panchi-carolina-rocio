import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']
})
export class CirculoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  color='#fggt4';

  @Input()
  posX='';

  @Input()
  posY='';
}
