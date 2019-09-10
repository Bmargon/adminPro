import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {



    this.contarTres().then( () => console.log('fin'))
           .catch( error => console.error('error', error));
   }

  ngOnInit() {

  }


  contarTres(): Promise<boolean> {

    let contador = 0;

    return new Promise( ( resolve, reject ) => {

      const intervalo = setInterval( () => {
        contador = contador + 1;
        console.log(contador);
        if ( contador === 4) {
          resolve( true );
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
