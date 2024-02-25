import { getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicios_Pedromi';

  textoUno: string = "Hola esto es sólo una prueba";
  resultadoUno: any;

  textoDos: number = 0;
  resultadoDos: number = 0;

  textoTres: string = "";
  resultadoTres: string = "";

  textoCuatro: string = "";
  resultadoCuatro: string = "";

  textoCinco: Array<number> = [];
  resultadoCinco: any = 0;

  textoSeis: string = "";
  resultadoSeis: string = "";


  buttonUno() { /* contar letras */
    const letras: Record<string, { letra: string, repeticiones: number }> = {};

    for (var i = 0; i < this.textoUno.length; i++) {
      const letra = this.textoUno[i].toLowerCase();

      if (letras[letra] === undefined) {
        letras[letra] = { letra, repeticiones: 1 };
      } else if (letras[letra] === letras[" "]) {
        letras[letra] = { letra, repeticiones: 0 };
      } else {
        letras[letra].repeticiones++;
      }
    }

    console.log(letras);

    let letraMasRepetida: { letra: string, repeticiones: number } | undefined;

    for (const letra in letras) {
      if (letraMasRepetida === undefined || letras[letra].repeticiones > letraMasRepetida.repeticiones) {
        letraMasRepetida = letras[letra];
      }
    }


    if (letraMasRepetida) {
      console.log(`La letra que más se repite es: ${letraMasRepetida.letra} (${letraMasRepetida.repeticiones} veces)`);
      this.resultadoUno = `La letra que más se repite es: ${letraMasRepetida.letra} (${letraMasRepetida.repeticiones} veces)`
    } else {
      console.log("No hay letras que se repitan en el string");
    }
  }


  /* 
    textoUno: string = "Hola esto es sólo una prueba";
  
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
    } */

  buttonDos() { /* Suma los enteros de 1 a n, donde n es proporcionado por el usuario */
    this.resultadoDos = 0;

    for (var i = 0; i <= this.textoDos; i++) {
      this.resultadoDos += i;
    };
  }

  buttonTres() { /* programa que invierte una cadena dada por el usuario */
    this.resultadoTres = "";

    for (var i = this.textoTres.length - 1; i >= 0; --i) {
      this.resultadoTres += this.textoTres[i];
    };
  }
  buttonCuatro() { /* cuenta vocales y consonantes */
    var consonantes: number = 0;
    var vocales: number = 0;

    for (var i = 0; i <= this.textoCuatro.length - 1; i++) {
      if (this.textoCuatro[i].toLowerCase() == "a") {
        vocales++
      }
      else if (this.textoCuatro[i].toLowerCase() == "e") {
        vocales++
      }
      else if (this.textoCuatro[i].toLowerCase() == "i") {
        vocales++
      }
      else if (this.textoCuatro[i].toLowerCase() == "o") {
        vocales++
      }
      else if (this.textoCuatro[i].toLowerCase() == "u") {
        vocales++
      }
      else if (this.textoCuatro[i].toLowerCase() == " ") {
      }
      else { consonantes++ }

    };
    this.resultadoCuatro = "son " + consonantes + " consonantes y " + vocales + " vocales";
  }

  buttonCinco() { /* encuentra el número más pequeño */
  this.resultadoCinco = 0;

  var numeroTemporal = 9;

    for (var i = 0; i <= this.textoCinco.length; i++) {
      for (var j = 0; j <= this.textoCinco.length; j++)
        if (this.textoCinco[i] <= this.textoCinco[j] && this.textoCinco[i] <= numeroTemporal) {
          this.resultadoCinco = this.textoCinco[i];
          numeroTemporal = this.textoCinco[i];
        }
    }
  }
  buttonSeis() { /* programa que invierte una cadena dada por el usuario */

    var variableTemporal: string= "";

    for (var i = this.textoSeis.length - 1; i >= 0; --i) {
      variableTemporal += this.textoSeis[i]
    };

    if (this.textoSeis == variableTemporal){
      this.resultadoSeis = "El texto es un palíndromo";
    }
    else {this.resultadoSeis = "El texto no es un palíndromo";
     }
  }
}