"use strict";

let numero = Number(prompt("Introduce un número del 1 al 12 para saber el mes:"));

// Comprobamos que el valor introducido sea un número válido
if (isNaN(numero) || numero < 1 || numero > 12) {
  console.log("Error 404: mes no encontrado.");
} else {
  let mes;

  switch (numero) {
    case 1:
      mes = "Enero";
      break;
    case 2:
      mes = "Febrero";
      break;
    case 3:
      mes = "Marzo";
      break;
    case 4:
      mes = "Abril";
      break;
    case 5:
      mes = "Mayo";
      break;
    case 6:
      mes = "Junio";
      break;
    case 7:
      mes = "Julio";
      break;
    case 8:
      mes = "Agosto";
      break;
    case 9:
      mes = "Septiembre";
      break;
    case 10:
      mes = "Octubre";
      break;
    case 11:
      mes = "Noviembre";
      break;
    case 12:
      mes = "Diciembre";
      break;
  }

  console.log("El mes correspondiente al número " + numero + " es: " + mes + ".");
}

/**
 * Ejemplos de ejecución:
 *
 * 1) Entrada: 3
 *    Salida en consola:
 *    El mes correspondiente al número 3 es: Marzo.
 *
 * 2) Entrada: 10
 *    Salida en consola:
 *    El mes correspondiente al número 10 es: Octubre.
 *
 * 3) Entrada: 15
 *    Salida en consola:
 *    Error 404: mes no encontrado.
 *
 * 4) Entrada: "abc"
 *    Salida en consola:
 *    Error 404: mes no encontrado.
 */

