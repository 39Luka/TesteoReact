"use strict";

// Pedimos tres notas y convertimos las respuestas a números
let nota1 = Number(prompt("Introduce la primera nota (0-10):"));
let nota2 = Number(prompt("Introduce la segunda nota (0-10):"));
let nota3 = Number(prompt("Introduce la tercera nota (0-10):"));

// Comprobamos si alguna nota no es un número o está fuera del rango 0–10
if (
  isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
  nota1 < 0 || nota1 > 10 ||
  nota2 < 0 || nota2 > 10 ||
  nota3 < 0 || nota3 > 10
) {
  console.log("¡Error! Asegúrate de introducir notas válidas entre 0 y 10.");
} else {
  // Calculamos la media
  let media = (nota1 + nota2 + nota3) / 3;
  console.log(`La media es: ${media.toFixed(2)}`);

  // Mostramos el resultado
  if (media >= 5) {
    console.log("¡Enhorabuena! Has aprobado. Puedes seguir codeando con orgullo.");
  } else {
    console.log("Suspenso... toca repasar más bucles y condicionales.");
  }
}

/**
 * Ejemplos de ejecución:
 * 
 * 1) Entrada: 7, 8, 6
 *    Salida en consola:
 *    La media es: 7.00
 *    ¡Enhorabuena! Has aprobado. Puedes seguir codeando con orgullo.
 * 
 * 2) Entrada: 4, 5, 3
 *    Salida en consola:
 *    La media es: 4.00
 *    Suspenso... toca repasar más bucles y condicionales.
 * 
 * 3) Entrada: 11, 5, 7
 *    Salida en consola:
 *    ¡Error! Asegúrate de introducir notas válidas entre 0 y 10.
*/
