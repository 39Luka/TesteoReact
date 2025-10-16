"use strict";

// Pedimos al usuario que introduzca su edad mediante un cuadro de diálogo (prompt)
// El valor devuelto por prompt es un string, así que lo convertimos a número con Number()
let edad = Number(prompt("Introduce tu edad:"));

// Evaluamos la edad introducida usando una estructura condicional if...else if...else
if (edad < 18) {
  // Si la edad es menor que 18, el usuario es menor de edad
  console.log("Todavía estás en modo tutorial.");
} else if (edad < 65) {
  // Si la edad es 18 o más pero menor que 65, el usuario es adulto
  console.log("Nivel desbloqueado: responsabilidad.");
} else {
  // Si la edad es 65 o más, el usuario pertenece al grupo de personas mayores
  console.log("Sabiduría legendaria alcanzada.");
}

/**
 * Ejemplos de ejecución:
 * 
 * 1) Entrada: 16
 *    Salida en consola: Todavía estás en modo tutorial.
 * 
 * 2) Entrada: 35
 *    Salida en consola: Nivel desbloqueado: responsabilidad.
 * 
 * 3) Entrada: 70
 *    Salida en consola: Sabiduría legendaria alcanzada.
 */