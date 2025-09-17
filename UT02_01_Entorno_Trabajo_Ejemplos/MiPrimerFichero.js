// MiPrimerFichero.js modificado
// Ejemplo básico de Node.js

// Mostrar un mensaje en la consola
console.log("¡Hola, mundo desde Node.js!");

// Crear una función sencilla
function saludar(nombre) {
  return `Hola, ${nombre}, bienvenido a Node.js`;
}

// Usar la función
let mensaje = saludar("Clase de DAM");
console.log(mensaje);

// Mostrar la fecha y hora actuales
let ahora = new Date();
console.log("La fecha y hora actual es:", ahora.toLocaleString());
