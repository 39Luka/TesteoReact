"use strict";

// Arrays de traducción al castellano.

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const id = setTimeout(imprimirFecha, 3000);

// Función que imprime la fecha formateada.
function imprimirFecha() {
  const f = new Date();
  console.log(
    diasSemana[f.getDay()] +
      ", " +
      f.getDate() +
      " de " +
      meses[f.getMonth()] +
      " de " +
      f.getFullYear()
  );
  clearTimeout(id);
}
