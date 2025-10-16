"use strict";

let menu = prompt("¿Qué menú deseas? (carne, pescado o verdura)").toLowerCase().trim();

// Comprobamos que el usuario haya escrito algo
if (menu === "") {
  console.log("No has pedido nada. ¡El hambre aprieta, decide algo!");
} else {
  switch (menu) {
    case "carne":
      console.log("Recomendación del chef: Vino tinto");
      break;
    case "pescado":
      console.log("Recomendación del chef: Vino blanco");
      break;
    case "verdura":
      console.log("Recomendación del chef: Agua");
      break;
    default:
      console.log("Escriba carne, pescado o verdura, ¡chef confundido!");
  }
}

/**
 * Ejemplos de ejecución:
 *
 * 1) Entrada: "carne"
 *    Salida en consola:
 *    Recomendación del chef: Vino tinto
 *
 * 2) Entrada: "pescado"
 *    Salida en consola:
 *    Recomendación del chef: Vino blanco
 *
 * 3) Entrada: "verdura"
 *    Salida en consola:
 *    Recomendación del chef: Agua
 *
 * 4) Entrada: "pizza"
 *    Salida en consola:
 *    Escriba carne, pescado o verdura, ¡chef confundido!
 *
 * 5) Entrada: "" (vacío)
 *    Salida en consola:
 *    No has pedido nada. ¡El hambre aprieta, decide algo!
 */