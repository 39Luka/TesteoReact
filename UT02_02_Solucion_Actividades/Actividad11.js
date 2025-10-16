"use strict";

/* 
 * Función que muestra las tablas de multiplicar desde 2 hasta el valor pasado por parámetro.
 */
function multiplicar(valor) {
  let i, j;
  for (i = 2; i <= valor; i++) {
    console.log(`Tabla de multiplicar del ${i}.`);
    for (j = 0; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log();
  }
}

/* 
 * Función que muestra las tablas de multiplicar desde 2 hasta el valor pasado por parámetro.
 */
function tablas(valor, fn) {
  if (valor > 2) {
    return fn(valor);
  } else {
    console.log(
      `Error. Para mostrar las tablas el valor del parámetro tiene que ser mayor que 2.`
    );
  }
}

// Pruebas de la función
tablas(4, multiplicar);
tablas(2, multiplicar);

/**
 * Ejemplos de ejecución:
 *
 * 1) Entrada: tablas(4, multiplicar)
 *    Salida en consola:
 *    Tabla de multiplicar del 2.
 *    2 x 0 = 0
 *    2 x 1 = 2
 *    ...
 *    2 x 10 = 20
 *
 *    Tabla de multiplicar del 3.
 *    3 x 0 = 0
 *    3 x 1 = 3
 *    ...
 *    3 x 10 = 30
 *
 *    Tabla de multiplicar del 4.
 *    4 x 0 = 0
 *    4 x 1 = 4
 *    ...
 *    4 x 10 = 40
 *
 * 2) Entrada: tablas(2, multiplicar)
 *    Salida en consola:
 *    Error. Para mostrar las tablas el valor del parámetro tiene que ser mayor que 2.
 */