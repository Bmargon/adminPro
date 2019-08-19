import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementados',
  templateUrl: './incrementados.component.html',
  styles: []
})
export class IncrementadosComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  
  @ViewChild('txtProgress') txtProgress: ElementRef;


  constructor() {
    console.log('Leyenda', this.leyenda);
    console.log('progreso', this.progreso);
   }

  ngOnInit() {
    console.log('Leyenda', this.leyenda);

  }


  cambiarValor( valor ) {
    if (this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );
  }


  onChange( newValue: number ) {

    // const elementoHTML: any = document.getElementsByName('progreso')[0];




    this.cambioValor.emit( this.progreso );

    if (newValue >= 100 ) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.txtProgress.nativeElement.focus;
    this.cambioValor.emit( this.progreso );

  }
}
