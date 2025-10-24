"use strict";

function toCani(cadena) {
  let cadenaCani = "";
  // Se convierte la cadena a minúsculas.
  cadena = cadena.toLowerCase();
  for (let i = 0; i < cadena.length; i++) {
    if (i % 2 == 0) {
      //Los carácteres de las posiciones pares se convierten a mayúsculas.
      cadenaCani = cadenaCani.concat(cadena.charAt(i).toUpperCase());
    } else {
      // Los carácteres de las posiciones impares se dejan intactos.
      cadenaCani = cadenaCani.concat(cadena.charAt(i));
    }
  }
  // Se cambian todas las c por k y las C por K.
  cadenaCani = cadenaCani.replaceAll("c", "k");
  cadenaCani = cadenaCani.replaceAll("C", "K");
  // Se añade las haches al final de la cadena.
  return cadenaCani.concat("HHH");
}

/**
 * Ejemplos de ejecución:
 * Cadena original: una cadena cani es como esta
 * Cadena Cani:     UnA KaDeNa kAnI Es kOmO EsTaHHH
 * 
 */ 
let cadena = "una cadena cani es como esta";
console.log(`Cadena original: ${cadena}`);
console.log(`Cadena Cani:     ${toCani(cadena)}`);



