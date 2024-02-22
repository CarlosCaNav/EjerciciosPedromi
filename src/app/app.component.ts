import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicios_Pedromi';

  textoUno: string = "Hola esto es sólo una puta prueba";
  resultadoUno: any ;

  buttonUno() {
   
    const letras: Record<string, number> = {};
    var variableTemporal: number = 0;

    for (var i = 0; i < this.textoUno.length; i++) {
      if (letras[this.textoUno[i]] == undefined) {
        letras[this.textoUno[i]] = 1;
      }
      else {
        letras[this.textoUno[i]] += 1;
      }
      
    }
    this.resultadoUno = letras;
    console.log(letras);
  }

}