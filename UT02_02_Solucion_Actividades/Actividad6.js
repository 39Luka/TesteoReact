"use strict";

let numero = Number(prompt("Introduce un número entero para calcular su factorial:"));
// Convertimos la entrada a número

if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
  console.log("Error matemático: introduce un número entero no negativo.");
  // Si no es un número válido, avisamos al usuario
} else {
  let factorial = 1; // Inicializamos la variable factorial

  // Bucle que multiplica todos los números desde 1 hasta "numero"
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  console.log(`El factorial de ${numero} es: ${factorial}`);
  // Mostramos el resultado en consola
}

/**
 * Ejemplos de ejecución:
 *
 * 1) Entrada: 5
 *    Salida en consola:
 *    El factorial de 5 es: 120
 *
 * 2) Entrada: 0
 *    Salida en consola:
 *    El factorial de 0 es: 1
 *
 * 3) Entrada: -3
 *    Salida en consola:
 *    Error matemático: introduce un número entero no negativo.
 *
 * 4) Entrada: 4.5
 *    Salida en consola:
 *    Error matemático: introduce un número entero no negativo.
 *
 * 5) Entrada: "abc"
 *    Salida en consola:
 *    Error matemático: introduce un número entero no negativo.
 */