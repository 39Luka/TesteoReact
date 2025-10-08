/**
 * Datos, Variables y Constantes: Lenguaje dinámicamente tipado
 */
let miVariable;          // declaro miVariable y como no se asigno un valor valdrá undefined
miVariable = 'Hola';     // ahora su valor es 'Hola', por tanto contiene una cadena de texto
miVariable = 34;         // pero ahora contiene un número
miVariable = [3, 45, 2]; // y ahora un array
miVariable = undefined;  // para volver a valer el valor especial undefined

miVariable = '23';
console.log(miVariable * 2); // JavaScript convierte la cadena a número y realiza la operación

/**
 * Datos, Variables y Constantes: Tipos de datos - Datos primitivos
 */

// Numéricos (number): enteros y reales (todos son del mismo tipo)
let edad = 23;
let pi = 3.14;

// Booleanos (boolean): true y false
let encendido = true;
let apagado = false;

// Indefinido (undefined): valor especial que indica que la variable no tiene valor asignado
let nombre;
console.log(nombre); // undefined

// Cadena de texto (string): secuencia de caracteres entre comillas simples, dobles 
//                           o backticks ` para templates literals.
// Ejemplo: interpolación de variables
let saludo = "Hola";
let persona = 'Ana';
let mensaje = `${saludo}, ${persona}!`; // interpolación
console.log(mensaje);

// Ejemplo: multilínea
let mensaje2 = `Este es un mensaje que ocupa varias líneas
sin necesidad de caracteres especiales.`;
console.log(mensaje2);
//Ejemplo: expresiones dentro de la interpolación
let a = 5, b = 7;
console.log(`La suma de ${a} + ${b} es ${a + b}.`);

// Nulo (null): valor especial que indica ausencia de valor
let dato = null;

/**
 * Datos, Variables y Constantes: Tipos de datos - Datos de referencia (objetos)
 */
// Los valores primitivos se copian y comparan por valor.
let a = 5;
let b = a; 
b++;
console.log(a); // 5 (no cambia)

// Los objetos se copian y comparan por referencia.
let obj1 = { nombre: "Ana" };
let obj2 = obj1; 
obj2.nombre = "Luis";
console.log(obj1.nombre); // "Luis"
// Aunque obj1 no se ha modificado, obj2 referencia al mismo objeto.

//El operador typeof devuelve una cadena con el tipo del valor.
console.log(typeof 94.8);        // "number"
console.log(typeof "Hola");      // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof function(){}); // "function"
console.log(typeof [1,2,3]);     // "object"
console.log(typeof null);        // "object" (error histórico del lenguaje)
valor === null; // para comprobar si es null

/**
 * Datos, Variables y Constantes: Declaración de variables
 */
function ejemplo() {
    variableGlo = 3; // Se crea una variable global sin declararla
    if (variableGlo === 3) {
        var variableVar = 1; // visible en toda la función
        let variableLet = 2; // visible solo dentro de este bloque
    }
    console.log(variableVar); // variableVar existe en este lugar
    console.log(variableLet); // ReferenceError: no definida aquí
}

/**
 * Datos, Variables y Constantes: Constantes
 */
const PI = 3.1416;
console.log(PI); // 3.1416
PI = 3; // Error: no se puede reasignar una constante


const miArray = [1, 2, 3];
console.log(miArray[0]); // 1
miArray[0] = 4; // Se puede modificar un elemento
console.log(miArray[0]); // 4
miArray = []; // Error: no se puede reasignar un nuevo array


/**
 * Datos, Variables y Constantes: Hoisting
 */
var a = "global";
console.log(b); // undefined
var b = 5;

// realmente internamente el intérprete lo ve así:
var a = "global";
var b;           // La declaración se eleva al inicio
console.log(b);  // undefined, porque todavía no tiene valor
b = 5;           // La asignación ocurre aquí

console.log(x); // ReferenceError
let x = 10;

/**
 * Operadores: Operadores de asignación
 */

let num1 = 3;
let num2 = 5;
console.log(num2 += num1); // num2 = 8
console.log(num2 -= num1); // num2 = 5
console.log(num2 *= num1); // num2 = 15
console.log(num2 /= num1); // num2 = 5
console.log(num2 %= num1); // num2 = 2

/**
 * Operadores: Operadores aritméticos
 */

// Ejemplo prefijo y sufijo
let x = 5;
let y;
console.log(y = ++x); // x = 6, y = 6 (incremento antes de la asignación)
console.log(y = x++); // x = 7, y = 6 (incremento después de la asignación)
console.log(y = --x); // x = 6, y = 6 (decremento antes de la asignación)
console.log(y = x--); // x = 5, y = 6 (decremento después de la asignación)
console.log(y = -x);  // y = -5, x = 5 (negación)

// Ejemplo combinado
let num1 = 5, num2 = 8, resultado1, resultado2;
console.log(resultado1 = ((num1 + num2) * 200) / 100); // cálculo aritmético
console.log(resultado2 = resultado1 % 3);              // resto
console.log(resultado1 = ++num1);
console.log(resultado2 = num2++);
console.log(resultado1 = --num1);
console.log(resultado2 = num2--);
console.log(resultado1 = -resultado2);

/**
 * Operadores: Operadores de comparación
 */
let a = 4, b = 5, c = "5";
console.log(a == c);  // true, convierte tipos
console.log(a === c); // false, tipo distinto
console.log(a != c);  // false
console.log(a !== c); // true
console.log(a > b);   // false
console.log(a < b);   // true
console.log(a >= b);  // false
console.log(a <= b);  // true

/**
 * Operadores: Operadores lógicos
 */
console.log(false && false); // false
console.log(false && true);  // false
console.log(true && false);  // false
console.log(true && true);   // true
console.log(false || false); // false
console.log(false || true);  // true
console.log(true || false);  // true
console.log(true || true);   // true
console.log(!false);         // true
console.log(!true);          // false

/**
 * Coerción de tipos
 */
// Ejemplo básico de coerción implícita
let numero = 5;
console.log("El número es: " + numero); 
// "El número es: 5"  → número convertido en string

// Ejemplo equivalente con coerción explícita
let numero = 5;
console.log("El número es: " + numero.toString()); 

/**
 * Reglas de coerción
 */
// 1.	Preferencia por number
console.log("15" < 100); // true → "15" se convierte a 15
// 2.	Coerción a boolean: false son 0, NaN, "", null, undefined; todo lo demás es true
let altura;
console.log(Boolean(altura)); // false, porque está undefined
// 3.	Comparaciones flexibles (== y !=)
console.log(0 == false);   // true
console.log("5" == 5);     // true
// 4.	Comparaciones estrictas (=== y !==)
console.log(0 === false);  // false
console.log("5" === 5);    // false

// Comparación sin coerción (como strings):
let x = "10";
let y = "9";
console.log(x < y);// true → comparación lexicográfica ("1" < "9")

// Comparación con coerción (number vs string):
let a = "2", b = 5;
console.log(typeof a, typeof b); // string number
console.log(a + b);              // "25" → concatena
console.log(Number(a) + b);      // 7   → conversión explícita

// Leer un número desde el prompt:
let edad = prompt("¿Cuántos años tienes?");
console.log(typeof edad); // string
// Si intentamos hacer una operación numérica
console.log(edad + 1); /** "181" si escribimos 18 → se concatena como texto */

// Conversión explícita (coerción forzada a number):
let edadNumero = Number(edad);
console.log(typeof edadNumero); // number
console.log(edadNumero + 1); // 19

/**
 * Estructuras de control - Condicionales: if...else
 */

// Ejemplo básico
let dia = prompt("Introduce el día de la semana:");
if (dia === "domingo") {
  console.log("Hoy es festivo");
} else {
  console.log("Hoy no es domingo, toca trabajar...");
}
// Ejemplo con números
let edadAna = parseInt(prompt("Edad de Ana:"));
let edadLuis = parseInt(prompt("Edad de Luis:"));
if (edadAna > edadLuis) {
  console.log(`Ana es mayor. (${edadAna} vs ${edadLuis})`);
} else {
  console.log(`Ana es menor o de igual edad. (${edadAna} vs ${edadLuis})`);
}

/**
 * Estructuras de control - Condicionales: switch...case
 */
// Ejemplo básico ánimo diario
let dia = prompt("Introduce un día de la semana:").toLowerCase();
switch (dia) {
  case "lunes":
    console.log("Ánimo, empieza la semana!");
    break;
  case "viernes":
    console.log("Ya casi es fin de semana!");
    break;
  case "sábado":
  case "domingo":
    console.log("¡Es fin de semana, disfruta!");
    break;
  default:
    console.log("Es un día normal.");
}

/**
 * Estructuras de control - Bucles (estructuras repetitivas): for
 */
// Ejemplo mostrar los números pares del 2 al 30
for (let i = 2; i <= 30; i += 2) {
  console.log(i);
}
// Ejemplo potencias de 2
let exponente = 1;
for (let i = 2; i <= 3000; i *= 2) {
  console.log(`2^${exponente} = ${i}`);
  exponente++;
}

/**
 * Estructuras de control - Bucles (estructuras repetitivas): for..in
 */
// Ejemplo recorrido propiedades de un objeto
let persona = { nombre: "Ana", edad: 25, ciudad: "Valencia" };
for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

/**
 * Estructuras de control - Bucles (estructuras repetitivas): for..of
 */
// Ejemplo recorrido array
let numeros = [10, 20, 30];
for (let n of numeros) {
  console.log(n);
}
// Ejemplo recorrido string
let saludo = "Hola";
for (let letra of saludo) {
  console.log(letra);
}

/**
 * Estructuras de control - Bucles (estructuras repetitivas): while
 */
// Ejemplo mostrar los números pares del 2 al 30
let i = 2;
while (i <= 30) {
  console.log(i);
  i += 2;
}
// Ejemplo acertar contraseña
let clave = "";
while (clave !== "LaVidaEsBella") {
  clave = prompt("Introduce la clave:");
}
console.log("Has acertado la clave!");

/**
 * Estructuras de control - Bucles (estructuras repetitivas): do..while
 */
// Ejemplo acceso por contraseña
let clave;
do {
  clave = prompt("Introduce la clave:");
} while (clave !== "LaVidaEsBella");
console.log("Acceso permitido!");

/**
 * Estructuras de control - Bucles (estructuras repetitivas): break y continue
 */
// Ejemplo break
let intentos = 0;
let clave;
while (true) {
  clave = prompt("Introduce la clave:");
  intentos++;
  if (clave === "LaVidaEsBella") {
    console.log("Clave correcta!");
    break; // sale del bucle
  }
  if (intentos === 3) {
    console.log("Demasiados intentos!");
    break;
  }
}
// Ejemplo con continue
for (let i = 2; i <= 20; i += 2) {
  if (i % 3 === 0) continue; // salta múltiplos de 3
  console.log(i);
}

/**
 * Estructuras de control - Operadores de control de flujo: operador condicional (ternario)
 */
let edad = 18;
console.log(edad >= 18 ? "Mayor de edad" : "Menor de edad");

/**
 * Estructuras de control - Operadores de control de flujo: operador de fusión nula (??) - Nullish coalescing 
 */
let nombre;
console.log(`Hola ${nombre ?? "Desconocido"}`);

/**
 * Funciones: Declaración de funciones
 */
// Ejemplo paso de una función como argumento
function suma(a, b) {
  return a + b;
}
function calculando(x, y, fn) {
  return fn(x, y);
}
let resultado = calculando(3, 4, suma);
console.log(resultado); // 7

// Ejemplo número indeterminado de argumentos - arguments[]
function suma() {
  var result = 0;
  for (var i=0; i<arguments.length; i++)
    result += arguments[i];
  return result;
}
console.log(suma(4, 2)); // 6
console.log(suma(4, 2, 5, 3, 2, 1, 3)); // 20

/**
 * Funciones: Función expresión (funciones anónimas)
 */
// Ejemplo paso de una función como argumento con funciones anónimas
var suma = function (a, b) {
    return a + b;
};
var calculando = function (x, y, fn) {
    return fn(x, y);
};
var resultado = calculando(3, 4, suma);
console.log(resultado); // 7

// No permite hoisting
permiteHoisting();
noPermiteHoisting(); // TypeError: undefined
function permiteHoisting () { 
    console.log("Función declarada.");
}
var noPermiteHoisting = function() {
    console.log("Función expresión – Funciones anónimas.");
};

// Función auto-ejecutada (IIFE - Immediately Invoked Function Expression)
(function() {
  console.log("Ejecutada al instante");
})();// Invoca la función inmediatamente.

/**
 * Funciones: Funciones flecha (arrow functions)
 */
// Ejemplo comparativo
// Con funciones anónimas tradicionales:
const suma = function(a, b) {
  return a + b;
};
// Con función flecha:
const suma = (a, b) => a + b;

// Ejemplo usando funciones flecha como parámetro
function calculando(x, y, fn) {
  return fn(x, y);
}
// Con función anónima:
let resultado1 = calculando(3, 4, function (a, b) {
  return a + b;
});
// Con función flecha:
let resultado2 = calculando(3, 4, (a, b) => a + b);
console.log(resultado1); // 7
console.log(resultado2); // 7

// Ejemplo número indeterminado de parámetros – acceso con rest
const sumaTodos = (...numeros) => {
  return numeros.reduce((acc, n) => acc + n, 0);
};
console.log(sumaTodos(1, 2, 3, 4)); // 10

/**
 * Funciones: Alcance de funciones - Call stack y Scope chain
 */
// Ejemplo variables globales y locales
// Aquí vemos que funcionLocal tiene acceso tanto a alfa como a varLocal, porque están en ámbitos superiores.
var varGlobal = "Soy global";
function funcionGlobal(alfa) {
  var varLocal = "Soy local de funcionGlobal";
  function funcionLocal() {
    var varLocal = "Soy más local todavía";
    console.log(varLocal); // "Soy más local todavía"
    console.log(alfa);     // parámetro recibido por funcionGlobal
  }
  funcionLocal();
  console.log(varLocal);   // "Soy local de funcionGlobal"
}
funcionGlobal(2);

// Ejemplo mismo nivel en la call stack:
// o	El orden de ejecución (call stack) es: global → primera → segunda → tercera.
// o	La cadena de ámbitos (scope chain) es distinta: 
//    la función tercera solo accede a sus propias variables y a las del ámbito global, 
//    pero no a las de primera ni segunda, porque no está escrita dentro de ellas.
var nombre = "Marina";
function tercera() {
  var c = "C ";
  console.log(c + nombre);
}
function segunda() {
  var b = "B ";
  tercera();
  console.log(b + nombre);
}
function primera() {
  var a = "A ";
  segunda();
  console.log(a + nombre);
}
primera();

// Ejemplo funciones anidadas (scope chain):
// o	Se puede acceder a todas las variables, porque tercera está definida dentro de segunda, que está dentro de primera.
var a = "A";
function primera() {
  var b = "B";
  function segunda() {
    var c = "C";
    function tercera() {
      var d = "D";
      console.log(a, b, c, d); 
    }
    tercera();
  }
  segunda();
}
primera(); // Muestra: A B C D

// Ejemplo cuidado con dónde se define la función:
// o	Aunque tercera es llamada desde segunda, no tiene acceso a b ni c, 
//    porque fue declarada en el ámbito global, no dentro de primera o segunda.
var a = "A"; 
function primera() {
  var b = "B";
  segunda();
  function segunda() { 
    var c = "C"; 
    tercera(); 
  }
}
function tercera() { 
  var d = "D";
  console.log(a, b, c, d); // Error: b y c no están en su ámbito
}
primera();

