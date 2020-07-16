import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `


    <button class="btn btn-primary" (click)="tamano = tamanoPlus(5)">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamanoMinus(5)">
      <i class="fa fa-minus"></i>
    </button>
    
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta.
    </p>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 20;

  tamanoMinus( numero: number ) {

    if ( this.tamano <= 0 ) {
      return this.tamano;
    } else {
      return this.tamano = this.tamano - numero;
    }

  } 

  tamanoPlus( numero: number ) {

    if ( this.tamano >= 30 ) {
      return this.tamano;
    } else {
      return this.tamano = this.tamano + numero;
    }

  } 

  constructor() { }

  ngOnInit(): void {
  }

}
