"use strict";

/* 
 * Función que comprueba primero si hay algún parámetro que no es de tipo numérico, 
 * después comprueba que haya por lo menos 2 números.
 * Y finalmente realiza la suma de los parámetros.
 */
function suma() {
  let i;
  let salir = false;
  // Comprobamos si hay algún parámetro no numérico
  for (i = 0; i < arguments.length && !salir; i++) {
    if (isNaN(arguments[i])) {
      salir = true;
      return `Error. Por lo menos un parámetro no es de tipo numérico. El primero encontrado es: ${arguments[i]}.`;
    }
  }
  // Comprobamos que haya al menos 2 parámetros
  if (arguments.length <= 2) {
    return `Error. Para sumar necesito como mínimo 2 números.`;
  }
  // Sumamos todos los parámetros
  let suma = 0;
  for (i = 0; i < arguments.length; i++) {
    suma = suma + arguments[i];
  }

  return `Todo bien. La suma es: ${suma}.`;
}

// Pruebas de la función
console.log(suma(5));
console.log(suma(5, 8, 10, "CASAS", 30, "coches", 1000));
console.log(suma(1, 2, 3, 4, -35));

/**
 * Ejemplos de ejecución:
 *
 * 1) Entrada: suma(5)
 *    Salida: Error. Para sumar necesito como mínimo 2 números.
 *
 * 2) Entrada: suma(5, 8, 10, "CASAS", 30, "coches", 1000)
 *    Salida: Error. Por lo menos un parámetro no es de tipo numérico. El primero encontrado es: CASAS.
 *
 * 3) Entrada: suma(1, 2, 3, 4, -35)
 *    Salida: Todo bien, feo(a). La suma es: -25.
 */
