"use strict";

let base = Number(prompt("Introduce la base:"));
let exponente = Number(prompt("Introduce el exponente (entero positivo):"));

// Comprobamos que la base sea un número y que el exponente sea un entero positivo
if (isNaN(base) || isNaN(exponente) || exponente < 0 || !Number.isInteger(exponente)) {
  console.log("Por favor, introduce una base numérica y un exponente entero positivo.");
} else {
  let resultado = 1; // Inicializamos el resultado en 1
  let contador = 0; // Contador para el bucle

  // Bucle while para calcular la potencia
  while (contador < exponente) {
    resultado *= base;
    contador++;
  }

  console.log(`${base} elevado a ${exponente} es igual a ${resultado}`);
  // Mostramos el resultado final en consola
}

/**
 * Ejemplos de ejecución:
 *
 * 1) Entrada: base = 3, exponente = 4
 *    Salida en consola:
 *    3 elevado a 4 es igual a 81
 *
 * 2) Entrada: base = 5, exponente = 0
 *    Salida en consola:
 *    5 elevado a 0 es igual a 1
 *
 * 3) Entrada: base = 2, exponente = 3.5
 *    Salida en consola:
 *    Por favor, introduce una base numérica y un exponente entero positivo.
 *
 * 4) Entrada: base = "abc", exponente = 2
 *    Salida en consola:
 *    Por favor, introduce una base numérica y un exponente entero positivo.
 *
 * 5) Entrada: base = 4, exponente = -2
 *    Salida en consola:
 *    Por favor, introduce una base numérica y un exponente entero positivo.
 */
