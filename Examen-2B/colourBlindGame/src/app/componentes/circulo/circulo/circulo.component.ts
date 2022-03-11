import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']

})

export class CirculoComponent implements OnInit {

  @ViewChild('dot', { static: false }) dot: ElementRef | undefined;

  @Input()
  respuestasCorrectas=0

  respuestasIncorrectas=0

  mensaje:string=""

  @Input()
  correctAnswer:boolean = false;

  @Input()
  color:string= "#ececec";

  constructor(
    private renderer:Renderer2) { }
  ngOnInit(): void {
  }

  @HostListener('click') onAnswered() {
    if(this.correctAnswer == true)
      { // @ts-ignore
        this.renderer.setStyle(this.dot.nativeElement, 'background', '#47b647')
        this.respuestasCorrectas += 1
      }
    else
      { // @ts-ignore
        this.renderer.setStyle(this.dot.nativeElement, 'background', '#ef5353')
        this.respuestasIncorrectas += 1
      }
  }

}
