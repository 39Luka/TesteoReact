"use strict";

const limite = 100000;

// Función para comprobar si un número es un palíndromo (capicua).
function esPalindromo(numero) {
  let nuevo = 0;
  while (numero != 0) {
    nuevo = 10 * nuevo + (numero % 10);
    numero = Math.floor(numero / 10);
  }
  return nuevo;
}

// Función para comprobar si un número es primo.
function esPrimo(numero) {
  let primo = true;
  for (let i = 2; (i < numero) & primo; i++) {
    if (numero % i == 0) {
      primo = false;
    }
  }
  return primo;
}

// Función que crea un array con los números primos entre 2 y el valor de la constante límite.
function arrayPrimos() {
  let array = [];
  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
      array.push(i);
    }
  }
  return array;
}

// Función que crea un array con los números palíndromos entre 1 y el valor de la constante límite.
function arrayPalindromos() {
  let array = [];
  for (let i = 1; i <= limite; i++) {
    if (esPalindromo(i) == i) {
      array.push(i);
    }
  }
  return array;
}

// Función que compara los arrays de números primos y números palíndromos y crea
// un nuevo array con los números que están en ambos arrays.
function arrayPrimosYpalindromos() {
  let primos = arrayPrimos();
  let palindromos = arrayPalindromos();
  let array = [];
  for (let i = 0; i < primos.length; i++) {
    for (let j = 0; j < palindromos.length; j++) {
      if (primos[i] == palindromos[j]) {
        array.push(primos[i]);
      }
    }
  }
  return array;
}

// Función para imprimir un array.
function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log(`Hay ${array.length} números que son palíndromos y primos.`);
}

/**
 * Ejemplo de ejecución:
 * 2 
 * 3 
 * 5
 * ....
 * ....
 * 97579 
 * 97879 
 * 98389 
 * 98689 
 * Hay 113 números que son palíndromos y primos.
 * 
 */

imprimirArray(arrayPrimosYpalindromos());
