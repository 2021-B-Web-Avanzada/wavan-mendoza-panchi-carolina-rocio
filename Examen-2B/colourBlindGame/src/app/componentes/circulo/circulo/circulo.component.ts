import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']

})

export class CirculoComponent implements OnInit {
  @ViewChild('dot', { static: false }) dot: ElementRef | undefined;

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
    if(this.correctAnswer)
      { // @ts-ignore
        this.renderer.setStyle(this.dot.nativeElement, 'background', '#47b647')
      }
    else
      { // @ts-ignore
        this.renderer.setStyle(this.dot.nativeElement, 'background', '#ef5353')
      }
  }

}
