"use strict";

const id = setInterval(actualizarReloj, 1000);

var totalTiempo;

// Función para validar los datos introducidos y cambiar el tiempo a segundos.
function temporizador(minutos, segundos) {
  if (segundos == undefined) {
    segundos = minutos;
    minutos = 0;
  }
  if (
    minutos < 0 ||
    segundos < 0 ||
    segundos > 59 ||
    Number.isNaN(minutos) ||
    Number.isNaN(segundos)
  ) {
    console.log("ERROR");
    clearInterval(id);
  } else {
    console.log(`Inicio Cuenta Atrás:`);
    totalTiempo = minutos * 60 + segundos;
  }
}

// Función que muestra el tiempo y descuenta un segundo al total del tiempo.
function actualizarReloj() {
  console.log(formatearHora(totalTiempo));
  if (totalTiempo == 0) {
    console.log("¡Tiempo terminado!");
    clearInterval(id);
  } else {
    totalTiempo--;
  }
}

// Función que muestra la hora en el formato hh:mm:ss.
function formatearHora(duracion) {
  let segundos = Number.parseInt(duracion % 60);
  let minutos = Number.parseInt((duracion / 60) % 60);
  let horas = Number.parseInt((duracion / (60 * 60)) % 24);

  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  return horas + ":" + minutos + ":" + segundos;
}

/** 
 * Ejemplo de ejecución:
 * 
 * Inicio Cuenta Atrás:
 * 00:15 
 * 00:14
 * 00:13
 * 00:12
 * 00:11
 * 00:10
 * 00:09
 * 00:08
 * 00:07
 * 00:06
 * 00:05
 * 00:04
 * 00:03
 * 00:02
 * 00:01
 * 00:00
 * ¡Tiempo terminado!
 */
temporizador(1, 5);


