"use strict";

// Constructor de objetos de tipo curso.
function creaCurso(c, a, d, al) {
  return {
    curso: c,
    año: a,
    descripcion: d,
    alumnos: al,
  };
}

// Función que imprime objetos de tipo curso.
function imprimirCurso(curso) {
  for (let cursos in curso) {
    if (Array.isArray(curso[cursos])) {
      console.log(`${cursos} : ${imprimirArray(curso[cursos])}`);
    } else {
      console.log(`${cursos}: ${curso[cursos]}`);
    }
  }
}

// Función para imprimir un array.
function imprimirArray(array) {
  let linea = "[";
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      linea = `${linea}${array[i]} - `;
    } else {
      linea = `${linea}${array[i]}`;
    }
  }
  return (linea = `${linea}]`);
}

/**
 * Ejemplo de ejecución:
 * 
 * curso: 2º DAM
 * año: 2025/26
 * descripcion: 2º Curso GS DAM
 * alumnos : [Pepe - María - Esther]
 */
let alumnado = ["Pepe", "María", "Esther"];
let curso = new creaCurso("2º DAM", "2025/26", "2º Curso GS DAM", alumnado);
imprimirCurso(curso);


