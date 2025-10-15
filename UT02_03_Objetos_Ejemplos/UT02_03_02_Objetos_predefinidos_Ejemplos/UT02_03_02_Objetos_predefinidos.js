'use strict';
/**
 * String: Creación de cadenas de texto
 * Conjunto de propiedades muy útiles a la hora de trabajar con cadenas de texto
 */
const strPrim = "marina"; // primitivo
const strPrim2 = String(1); // Type Coercion primitivo "1"
const strPrim3 = String(true); // Type Coercion primitivo "true"
const strObj = new String(strPrim); // objeto
console.log(typeof strPrim + ' ' + strPrim); // "string marina"
console.log(typeof strPrim2 + ' ' + strPrim2); // "string 1"
console.log(typeof strPrim3 + ' ' + strPrim3); // "string true"
console.log(typeof strObj); // "object"

/**
 * String: Métodos y propiedades
 */
// .length: Devuelve la longitud de la cadena
'Hola mundo'.length; // 10

// .charAt(posición): Devuelve el carácter en la posición indicada
'Hola mundo'.charAt(0); // 'H'
'Hola mundo'[0]; // 'H'
'Hola'.at(-1); // 'a' (ES2022)

// .indexOf(subcadena) /.lastIndexOf(subcadena): Devuelve la posición de la primera/última ocurrencia de la subcadena
'Hola mundo'.indexOf('o'); // 1 (primera ocurrencia)
'Hola mundo'.lastIndexOf('o'); // 9 (última ocurrencia)

// .substring(inicio[, fin]) /.slice(inicio[, fin]): Devuelve la subcadena entre los índices indicados
'Hola mundo'.substring(2, 4); // 'la' (desde índice 2 hasta índice 4, sin incluir)
'Hola mundo'.slice(-8, -6); // 'la' (desde índice -8 hasta índice -6, sin incluir)

// .replace(valorBuscado, nuevoValor) / replaceAll(valorBuscado, nuevoValor): Reemplaza la primera/ todas las ocurrencias de valorBuscado por nuevoValor
'Hola mundo'.replace('Hola', 'Adiós'); // 'Adiós mundo' (sólo la primera ocurrencia)
'Hola mundo mundo'.replaceAll('mundo', 'JS'); // 'Hola JS JS' (todas las ocurrencias) (ES2021)

// .toLowerCase() / .toUpperCase(): Devuelve la cadena en minúsculas/mayúsculas
'Hola Mundo'.toLowerCase(); // 'hola mundo'

// .toLocaleLowerCase() / .toLocaleUpperCase(): Devuelve la cadena en minúsculas/mayúsculas teniendo en cuenta la configuración regional
'i'.toLocaleUpperCase('tr'); // 'İ' (mayúscula con acento punto en turco) (ES2020)

// .trim(): Elimina los espacios en blanco al inicio y al final de la cadena
'   Hola mundo   '.trim(); // 'Hola mundo' (elimina espacios en blanco al inicio y al final)

// .startsWith(valor) / .endsWith(valor) / .includes(valor): Devuelve true/false si la cadena empieza/termina/contiene el valor indicado
'Hola mundo'.startsWith('Hol'); // true (empieza por 'Hol')
'Hola mundo'.endsWith('Hol'); // false (no termina por 'Hol')
'Hola mundo'.includes('mun'); // true (contiene 'mun')

// .repeat(n): Repite la cadena n veces
'Hola mundo'.repeat(3); // 'Hola mundoHola mundoHola mundo' (repite 3 veces)

// .split(separador): Divide la cadena en un array usando el separador indicado
'Hola mundo'.split(' '); // ['Hola', 'mundo'] (divide en array usando espacio como separador)


/**
 * String: Función eval()
 * Ejecuta código JavaScript representado como una cadena de texto
 * Su uso no es recomendable por motivos de seguridad y rendimiento
 */

let x = 3;
let y = 2;
let a = eval("2+3");
let b = eval("x*y");
eval("console.log('a vale '+a+' b vale '+b)"); // a vale 5 b vale 6

/**
 * Number: Métodos y funciones
 */

// .toFixed(num): Devuelve una cadena con el número formateado con num decimales
23.2376.toFixed(2);  // '23.24' (redondea a 2 decimales y devuelve una cadena)

// .toLocaleString(): Devuelve una cadena con el número formateado según la configuración regional
23.76.toLocaleString('es-ES'); // '23,76' (formatea el número según la configuración regional española)
1234567.89.toLocaleString('en-US'); // '1,234,567.89' (formatea el número según la configuración regional estadounidense)

/**
 * Number: Métodos y funciones - Funciones globales relacionadas con números
 */

// isNaN(valor): Devuelve true si el valor no es un número (NaN), false en caso contrario
isNaN(123); // false
isNaN("abc"); // true

// isFinite(valor): Devuelve true si el valor es un número finito, false si es NaN, Infinity o -Infinity
isFinite(123); // true
isFinite(Infinity); // false

// parseInt(valor): Convierte una cadena a un entero en la base indicada (por defecto base 10)
parseInt("42px"); // 42
parseInt("abc42"); // NaN , no empieza con un número

// parseFloat(valor): Convierte una cadena a un número de punto flotante
parseFloat("3.14px"); // 3.14
parseFloat("abc3.14"); // NaN , no empieza con un número

/**
 * Math: Redondeo - Ejemplo
 * Pequeña biblioteca de funciones matemáticas 
 * y constantes (Math.PI - π, Math.E - base de logaritmos naturales, etc.) 
 */

const precio = 5.7;
console.log(`Precio redondeado: ${Math.round(precio)}`); // Precio redondeado: 6

/**
 * Date: Creación
 * Creación y manipulación de fechas y horas
 */

// Fecha y hora actuales
const fechaActual = new Date();
console.log(fechaActual);

// Fecha específica (año, mes, día)
const nochevieja = new Date(2050, 11, 31); 
console.log(nochevieja); // Los meses van de 0 (enero) a 11 (diciembre)

// Fecha y hora específicas
const cenaNochevieja = new Date(2050, 11, 31, 22, 30, 0); // 31 diciembre 2050, 22:30:00
console.log(cenaNochevieja); // Los días se numeran del 1 al 31

/* También puedes crear fechas a partir de una cadena o de un timestamp Epoch (milisegundos desde el 1 de enero de 1970): */
const desdeCadena = new Date("2050-12-31T22:30:00");
console.log(desdeCadena);
const desdeTimestamp = new Date(2556148200000);
console.log(desdeTimestamp);
/* El formato ISO (YYYY-MM-DDTHH:mm:ss) es el más recomendable porque evita errores de interpretación entre distintos navegadores y zonas horarias. */

/**
 * Date: Métodos
 */

const fecha = new Date(2050, 11, 31, 22, 30, 0);
console.log(fecha.getFullYear()); // 2050

/* También existen versiones “UTC” (por ejemplo, getUTCFullYear()) que devuelven los valores sin aplicar el huso horario local. */
console.log(fecha.getMonth());    // 11 (diciembre)
console.log(fecha.getDate());     // 31
console.log(fecha.getDay());      // 6 (sábado, los días van de 0 (domingo) a 6 (sábado))
console.log(fecha.getHours());    // 22
console.log(fecha.getMinutes());  // 30

const resaca = new Date(fecha.setDate(fecha.getDate()+ 1)); // Ajusta automáticamente el mes y el año.
console.log(resaca);

/** Se recomienda usar toLocaleDateString() para mostrar fechas adaptadas al idioma o país del usuario.
 * Si no se especifica un idioma, el formato depende de la configuración regional del sistema operativo o del navegador.
 */
const fechaFormateada = new Date().toLocaleDateString('es-ES', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
});
console.log(fechaFormateada);
// "jueves, 9 de octubre de 2025"

/**
 * Date: Métodos - getTime() y comparaciones
 * Para comparar fechas, se debe usar el método getTime(), que devuelve el número de milisegundos desde 1970
 */

const d1 = new Date(2050, 11, 31, 22, 30, 0);
const d2 = new Date(2050, 11, 31, 22, 30, 0);
console.log(d1 == d2); // false (distintos objetos)
console.log(d1.getTime() === d2.getTime()); // true (misma fecha y hora)
const d3 = new Date(2050, 11, 30);
console.log(d3 < d1); // true (d3 es anterior a d1)

