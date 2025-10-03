// Quitar comentarios para ver errores
// 'use strict';//hace obligatorio declarar las variables
hola="hola";
// var edad=18;//global hasta que encuentra otra global con el mismo identificador
let edad=15;//bloque para el que se declara
if (edad < 18) {
    let textoLet = 'Eres menor de edad y te ponemos un año más';
    var textoVar = 'Eres menor de edad y te ponemos un año más';

} else {
    let textoLet = 'Eres mayor de edad y te ponemos un año más';
    var textoVar = 'Eres mayor de edad y te ponemos un año más';
}
edad = edad + 1;

function verEdad(){
    // edad=16;//global externa a la función
    var edad=18;// global a esta función
    if (edad < 18) {
        let textoLet = 'Eres menor de edad y te ponemos un año más';
        var textoVar = 'Eres menor de edad y te ponemos un año más';

    } else {
        let textoLet = 'Eres mayor de edad y te ponemos un año más';
        var textoVar = 'Eres mayor de edad y te ponemos un año más';
        
    }
    edad = edad + 1;
    // console.log(textoLet);
    console.log(textoVar);  // mostrará la cadena
    console.log(edad);
}
// console.log(textoLet);  // mostrará undefined porque fuera del if no existe la variable -- ERROR!
console.log(textoVar);  // mostrará la cadena porque var no tiene ámbito de bloque
console.log(edad);
verEdad();