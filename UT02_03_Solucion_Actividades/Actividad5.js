"use strict";

const id = setInterval(pedirDni, 10000);

var arrayDni = [];

// Función que solicita un DNI y valida que sea correcto.
// Si es correcto, cacula la letra y añade el dni al array.
// Si se introduce -1, detiene el temporizador y muestra el array.
function pedirDni() {
  let dni;
  dni = prompt("Introduce un DNI sin la letra  \n(-1 para terminar) ");
  if (isNaN(dni) || dni < -1 || dni > 99999999) {
    console.log("ERROR. Datos no válidos.");
  } else {
    if (dni != -1) {
      arrayDni.push(letraDni(dni));
    } else {
      clearInterval(id);
      imprimirArray(arrayDni);
    }
  }
}

// Función que calcula la letra de un DNI.
function letraDni(dni) {
  let secuenciaLetrasNIF = "TRWAGMYFPDXBNJZSQVHLCKE";
  return dni.toString().concat(secuenciaLetrasNIF.charAt(dni % 23));
}

// Función que imprime un array.
function imprimirArray(array) {
  console.log(`Has introducido ${array.length} DNI´s`);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
