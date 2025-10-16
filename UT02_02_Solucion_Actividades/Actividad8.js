"use strict";

// Función para imprimir.
function imprimir(cantidad, valor) {
  let salida = "Salida:"; // String donde se guardan los valores.
  if (cantidad >= 1) {
    // Se crea la salida sólo si el parametro cantidad es mayor o igual a 1.
    for (let i = 0; i < cantidad; i++) {
      if (i == 0) {
        salida = `${salida} ${valor}`; // En la primera iteración se añade al string el valor pasado por parámetro.
      } else {
        valor = valor * 2; // En las siguiente iteraciones se multiplica el valor por 2.
        salida = `${salida} ${valor}`; // Se añade al string salida del valor.
      }
    }
  } else salida = "No hay valores que mostrar.";
  return `${salida}`;
}

// Pruebas de la función
console.log(imprimir(10, 2));
console.log(imprimir(0, 8));
console.log(imprimir(1, 5));

/**
 * Ejemplos de ejecución:
 *
 * 1) Entrada: imprimir(10, 2)
 *    Salida en consola:
 *    Salida: 2 4 8 16 32 64 128 256 512 1024
 *
 * 2) Entrada: imprimir(0, 8)
 *    Salida en consola:
 *    No hay valores que mostrar.
 *
 * 3) Entrada: imprimir(1, 5)
 *    Salida en consola:
 *    Salida: 5
 */
