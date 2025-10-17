'use strict';

/**
 * Colecciones: Arrays, Maps, Sets y WeakMaps/WeakSets - Ejemplos
 */
// Arrays
const frutas = ["manzana", "pera", "plátano"];
console.log(frutas[1]); // "pera"

// Map
const edades = new Map();
edades.set("Ana", 25);
edades.set("Luis", 30);
console.log(edades.get("Ana")); // 25

// Set
const numeros = new Set([1, 2, 2, 3, 4]);
console.log(numeros); // Set(4) {1, 2, 3, 4}

/**
 * Colecciones: Arrays - Creación y acceso
 */

const cosas = []; // Array vacío
const tresTipos = [11, "hola", true]; 

const articulos = new Array(40, 100); 
console.log(articulos); // Crea un Array con 2 elementos (40 y 100) - Array [ 40, 100 ]
const articulos2 = new Array(40); 
console.log(articulos2); // Crea un Array con 40 elementos UNDEFINED - Array(40) [ <10 empty slots>, … ]

// .length indica el número de elementos del array y puede modificarse para recortar o ampliar su tamaño
console.log(tresTipos[0]); // 11
console.log(tresTipos[2]); // true
console.log(tresTipos.length); // 3
tresTipos.length = 2; // Se acorta
console.log(tresTipos); // [11, "hola"];

/**
 * Colecciones: Arrays - Añadir y modificar elementos
 * Añadir/modificar elementos asignando un valor a una posición concreta
 */

tresTipos[0] = 15;
tresTipos[tresTipos.length] = "Marina";
console.log(tresTipos.length); // 3
tresTipos[8] = "Navarro";
console.log(tresTipos.length); // 9
console.log(tresTipos[7]); // undefined

/**
 * Colecciones: Arrays - Conversión entre cadenas y arrays
 * El método String.split(separador) permite dividir una cadena en fragmentos y devolver un array con esos fragmentos.
 */
const frase = "Yo soy tu madre.";
const palabras = frase.split(" ");
console.log(palabras[0]); // "Yo"
console.log(palabras[1]); // "soy"
console.log(palabras[2]); // "tu"
console.log(palabras[3]); // "madre."

/**
 * Colecciones: Arrays - Arrays de Objetos
 * Es muy habitual almacenar datos en forma de objetos dentro de arrays, 
 * especialmente cuando se gestionan colecciones de información.
 */
const alumnos = [
  {
    id: 1,
    name: "Rubén",
    course: "2nDAM",
    age: 21
  },
  {
    id: 2,
    name: "Fernando",
    course: "2nDAM",
    age: 23
  },
];
console.log(alumnos[0].name); // "Rubén"
console.log(alumnos[1].age);  // 23

/**
 * Cuando se intenta acceder a un elemento de un array que no existe, 
 * no se produce un error; JavaScript devuelve undefined.
 * Sin embargo, sí se genera un error si se intenta acceder 
 * a una propiedad o índice de algo que no es un array u objeto.
 * 
 * Para evitar errores de este tipo, se utiliza operador de encadenamiento opcional (?.) 
 */
const alumnos2 = null;
console.log(alumnos2?.[0]); // undefined (no error)

/**
 * Colecciones: Arrays - Operaciones - métodos: Arrays y Strings
 */
// .toString(): Convierte un array en una cadena de texto, separando los elementos por comas.
const listaCompra = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];
let listaCompraCadena = listaCompra.toString(); // Método toString()
console.log(listaCompra);
console.log('listaCompraCadena: ' + listaCompraCadena);

// .join(separador): Convierte un array en una cadena de texto, uniendo los elementos con el separador indicado.
let listaCompraJoin = listaCompra.join('--separador--'); // Método join()
console.log(listaCompra); 
console.log('listaCompraJoin: ' + listaCompraJoin);

// .split(separador): Convierte una cadena de texto en un array, dividiendo la cadena en fragmentos según el separador indicado.
const listaCompraSplitada = listaCompraJoin.split('--separador--'); // Método split()
console.log(listaCompraSplitada);

/**
 * Colecciones: Arrays - Operaciones - métodos: Métodos principales
 */
// .push() - .unshift(): Añaden uno o varios elementos al final o al principio del array, respectivamente.
const dias = ['Lunes', 'Martes'];
dias.push('Miércoles');   
console.log(dias); // ['Lunes', 'Martes', 'Miércoles']
dias.unshift('Domingo');  
console.log(dias); // ['Domingo', 'Lunes', 'Martes', 'Miércoles']

// .pop() - .shift(): Elimina y devuelve el último o el primer elemento del array, respectivamente.
let ultimo = dias.pop(); // 'Miércoles'
console.log(dias); // ['Domingo', 'Lunes', 'Martes']
let primDia = dias.shift(); // 'Domingo'
console.log(dias); // ['Lunes', 'Martes']

// .splice(): Añade, elimina o reemplaza elementos en una posición concreta del array.
console.log(listaCompra); 
// Eliminar 'Manzanas'
listaCompra.splice(1, 1);
console.log(listaCompra); // ['Peras', 'Kiwis', 'Plátanos', 'Mandarinas'];

// Insertar 'Naranjas' y 'Sandías' después de 'Plátanos'
listaCompra.splice(3, 0, 'Naranjas', 'Sandías');
console.log(listaCompra); // ['Peras', 'Kiwis', 'Plátanos', 'Naranjas', 'Sandías', 'Mandarinas'];

// Reemplazar 'Kiwis' por 'Cerezas' y 'Nísperos'
listaCompra.splice(1, 1, 'Cerezas', 'Nísperos');
console.log(listaCompra); // ['Peras', 'Cerezas', 'Nísperos', 'Plátanos', 'Naranjas', 'Sandías', 'Mandarinas']

// .slice(): Extrae una sección del array y devuelve un nuevo array con los elementos extraídos.
const dias2 = ['Lunes', 'Martes', 'Miércoles', 'Jueves'];
const laborables = dias2.slice(0, 3); // ['Lunes', 'Martes', 'Miércoles']
console.log(laborables);
// También se puede usar para copiar un array completo
const copia = dias2.slice();
console.log(copia);

/**
 * Colecciones: Arrays - Operaciones - métodos: Ordenación
 * El método .sort() ordena los elementos de un array por defecto alfabéticamente 
 * (según el valor Unicode de cada elemento convertido a texto). 
 * Este método modifica el array original y devuelve el array ordenado.
 */

const frutas2 = ["pera", "manzana", "kiwi", "plátano"];
frutas2.sort();
console.log(frutas2); // ["kiwi", "manzana", "pera", "plátano"]

// Como ordena alfabéticamente puede dar resultados extraños cuando contiene números.
const numeros2 = [40, 1, 5, 200];
console.log(numeros2.sort()); // [1, 200, 40, 5] (ordena como texto)

// Para personalizar el criterio de ordenación, se puede pasar una función.
numeros2.sort((a, b) => a - b);
console.log(numeros2); // [1, 5, 40, 200]

// Es muy útil para ordenar objetos: Ordenar arrays de objetos por una propiedad numérica
const otrosAlumnos = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 19 },
  { nombre: "Carmen", edad: 21 }
];
// Ordenado por edad ascendente
otrosAlumnos.sort((a, b) => a.edad - b.edad);
console.log(otrosAlumnos);
// Ordenado por edad descendente
otrosAlumnos.sort((a, b) => b.edad - a.edad);
console.log(otrosAlumnos);

/**
 * Colecciones: Arrays - Operaciones - métodos: Otros métodos comunes
 */
// .concat(): Combina dos o más arrays y devuelve un nuevo array con los elementos combinados.
const frutas3 = ["manzana", "pera"];
const citricos = ["naranja", "limón"];
const lista = frutas3.concat(citricos);
console.log(lista); // ["manzana", "pera", "naranja", "limón"]

// .reverse(): Invierte el orden de los elementos del array.
const numeros3 = [1, 2, 3, 4, 5];
numeros3.reverse();
console.log(numeros3); // [5, 4, 3, 2, 1]

// .indexOf(): Devuelve el índice de la primera aparición de un elemento en el array, o -1 si no se encuentra.
const colores = ["rojo", "azul", "verde", "azul"];
console.log(colores.indexOf("azul")); // 1
console.log(colores.indexOf("negro")); // -1


