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


  buttonUno() {
    const letras: Record<string, { letra: string, repeticiones: number }> = {};

    for (var i = 0; i < this.textoUno.length; i++) {
      const letra = this.textoUno[i].toLowerCase();

      if (letras[letra] === undefined) {
        letras[letra] = { letra, repeticiones: 1 };
      } else {
        letras[letra].repeticiones++;
      }
    }

    if (letras[" "].repeticiones != 0) {
      letras[" "].repeticiones = letras[" "].repeticiones = 0;
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

  buttonDos() {
    this.resultadoDos = 0;

    for (var i = 0; i <= this.textoDos; i++) {
      this.resultadoDos += i;
    };
  }

  buttonTres() {
    this.resultadoTres = "";

    for (var i = this.textoTres.length - 1; i >= 0; --i) {
      this.resultadoTres += this.textoTres[i];
    };
  }
  buttonCuatro() {
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
}