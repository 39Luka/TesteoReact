'use strict';

/**
 * Colecciones: Arrays - Programación Funcional - Métodos (Callbacks)
 * La programación funcional es un paradigma que se centra en el uso de funciones puras y 
 * evita el uso de estados mutables y bucles imperativos, como for y while. 
 */

/**
 * .FILTER(): Devuelve un nuevo array con los elementos que cumplen una condición.
 */
const arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
const aprobados = arrayNotas.filter(function(nota) {
  if (nota >= 5) {
    return true;
  } else {
    return false;
  } 
});
console.log(aprobados); // aprobados = [5.2, 6, 9.75, 7.5]
/**
 * Podemos refactorizar esta función para que sea más 
 * compacta
 */
const aprobados2 = arrayNotas.filter(function(nota) {
  return nota >= 5;     
// nota > =  5 se evalúa a 'true' si es cierto 
// o 'false' si no lo es
});
console.log(aprobados2);
/**
 * Usando funciones lambda la sintaxis queda mucho más simple
 */
const aprobados3 = arrayNotas.filter(nota => nota >=  5);
console.log(aprobados3);

/**
 * .FIND(): Devuelve el primer elemento que cumple la condición (no un array).
 */

//Como filter pero NO devuelve un array sino el primer elemento
const primerAprobado = arrayNotas.find(nota  => nota >=  5);  // primerAprobado = 5.2
console.log(primerAprobado);

/**
 * .MAP(): Crea un nuevo array aplicando una función a cada elemento.
 */
const arrayNotasSubidas = arrayNotas.map(nota => Math.round(nota + (nota * 10/100)));
console.log(arrayNotasSubidas); // [ 6, 4, 7, 11, 8, 3 ]

/**
 * .EVERY() / .SOME(): Verifican si todos o algunos elementos cumplen una condición.
 */
const todosAprobados = arrayNotas.every(nota  => nota >=  5); 
const algunAprobado = arrayNotas.some(nota  => nota >=  5); 
console.log(todosAprobados); // false
console.log(algunAprobado); // true

/**
 * .REDUCE(): Acumula los valores del array en un único resultado.
 */
// Suma de las notas
const sumaNotas = arrayNotas.reduce((total, nota) => total + nota, 0); // total = 35.35
console.log(sumaNotas);
// podríamos haber omitido el valor inicial 0 para total
const sumaNotas2 = arrayNotas.reduce((total, nota) => total + nota); // total = 35.35
console.log(sumaNotas2);
// Nota más alta
const maxNota = arrayNotas.reduce((max,nota)  => nota > max ? nota : max) // max = 9.75
console.log(maxNota);

/**
 * .FOREACH(): Ejecuta una función para cada elemento del array.
 * Es el método más general de los vistos. 
 * No devuelve nada, sino que permite realizar algo 
 * con cada elemento del array.
 */
arrayNotas.forEach((nota, indice)  => {
  console.log('El elemento de la posición ' + indice + ' es: ' + nota);
});

/**
 * .INCLUDES(): Comprueba si un valor existe en el array.
 */
console.log(arrayNotas.includes(7.5)); // true

/**
 * Array.from(): Crea un nuevo array a partir de otro o de un iterable.
 * También permite aplicar una función de transformación a cada elemento, similar a map.
 */
const arrayNotasSubidas2 = Array.from(arrayNotas, nota  => nota + (nota * 10/100));
console.log(arrayNotasSubidas2); // [ 5.720000000000001, 4.29, 6.6, 10.725, 8.25, 3.3 ]
// Puede usarse para hacer una copia de un array,
// igual que slice.
const arrayA = [5.2, 3.9, 6, 9.75, 7.5, 3];
const arrayB = Array.from(arrayA);
console.log(arrayB); // [ 5.2, 3.9, 6, 9.75, 7.5, 3 ]

/**
 * Colecciones: Arrays - Desestructuración - Spread - Rest
 * La desestructuración es una expresión de JavaScript que permite extraer datos de arrays o
 * objetos y asignarlos a variables de manera más concisa y legible.
 */
// extraemos el primer y segundo valor del array 'elements' 
// en variables denominadas 'first' y 'last'
const elements = [5, 2];
const [first, last] = elements;    // first = 5, last = 2
console.log(first, last);
// si el array tiene más elementos de los que se asignan, 
// los demás se descartan
const elements2 = [5, 4, 3, 2];
const [first2, second] = elements2;  // first = 5, second = 4
console.log(first2, second);
// podemos omitir elementos dejando huecos con comas
const elements3 = [5, 4, 3, 2];
const [first3, , third] = elements3; // first = 5, third = 3
console.log(first3, third);
// si hay menos elementos que variables, 
// las variables sobrantes valen undefined
const elements4 = [4];
const [first4, second2] = elements4;  // first = 4, second = undefined
console.log(first4, second2);

// También permite intercambiar valores entre variables sin usar una variable temporal.
let a = 10;
let b = 5;
[a, b] = [b, a];
console.log(a, b); // a = 5, b = 10

// Spread (Expandir)
// Con el operador … podemos extraer a parámetros los elementos de un array (spread).
const deManeraIndividual = (param) => console.log(...param);
const array = [1, 2, 3, 4, 5];
deManeraIndividual(array);  // imprime 1 2 3 4 5

// Rest (Agrupar)
// Con el operador … podemos agrupar varios parámetros en un array (rest).
const deManeraAgrupada = (...param) => console.log(param);
deManeraAgrupada(a, b); // agrupa los argumentos en un array [ 5, 10 ]

/**
 * Desestructuración y Rest
 */
console.log(arrayNotas); // [ 5.2, 3.9, 6, 9.75, 7.5, 3 ]
const [primera, , ...resto] = arrayNotas;
console.log(primera, resto); // primera = 5.2, resto = [6, 9.75, 7.5, 3]

/**
 * REESTRUCTURACIÓN DE ARRAYS
 * Podemos combinar la desestructuración y el operador spread
 * para crear nuevos arrays a partir de otros.
 */
const pair = [3, 4];
// Usando spread
const complete = [1, 2, ...pair, 5];  
console.log(complete); // [1, 2, 3, 4, 5]
// Sin usar spread
const complete2 = [1, 2, pair, 5]; 
console.log(complete2); // [1, 2, [3, 4], 5]

/**
 * COPIA DE ARRAYS
 * El operador spread también permite copiar arrays,
 * igual que Array.from() o .slice().
 */
const arrayC = [2, 4, 6];
const copiaDeC = [...arrayC];
console.log(copiaDeC); // [2, 4, 6]


