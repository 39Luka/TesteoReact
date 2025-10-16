"use strict";
// Definición de variables.
let masaMarcos = 90;
let alturaMarcos = 1.9;
let masaJuan = 75;
let alturaJuan = 1.8;

// Cálculo del valor de IMC.
let imcMarcos = masaMarcos / (alturaMarcos * alturaMarcos);
let imcJuan = masaJuan / (alturaJuan * alturaJuan);

let imcMarcosMayorQueJuan = imcMarcos > imcJuan;

// Mostrando resultado por consola.
console.log(`IMC de Marcos: %.2f`, imcMarcos);
console.log(`IMC de Marcos: %.2f`, imcJuan);
console.log(
  `¿Tiene Marcos un IMC mayor que el de Juan?: ${imcMarcosMayorQueJuan}`
);

/**
 * Ejemplo de ejecución:
 * IMC de Marcos: 24.93
 * IMC de Marcos: 23.15
 * ¿Tiene Marcos un IMC mayor que el de Juan?: true
 */

