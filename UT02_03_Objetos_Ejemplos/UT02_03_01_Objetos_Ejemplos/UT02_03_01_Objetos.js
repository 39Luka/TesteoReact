'use strict';
/**
 * Objetos: Creación
 */
const profesora = {
    nombre: 'Marina',
    apellidos: 'Navarro Pina',
    edad: 33,
};

const profesora2 = new Object();
// crea propiedad nombre y asigna valor
profesora2.nombre = 'Marina'; 
// crea propiedad apellidos y asigna valor
profesora2['apellidos'] = 'Navarro Pina';
profesora2.edad = 33;

/**
 * Objetos: Propiedades
 */
console.log(profesora.nombre); // Marina
console.log(profesora["nombre"]); // Marina
let prop = "nombre";
console.log(profesora[prop]); // Marina

// acceder a una propiedad que no existe
console.log(profesora.ciclo); // undefined
// genera un error si intentamos acceder a propiedades de algo que no es un objeto
// console.log(profesora.ciclo.descripcion); // error

// operador de encadenamiento opcional (?.)
console.log(profesora.ciclo?.descripcion); 
// si profesora.ciclo es un objeto muestra el valor de
// profesora.ciclo.descripcion y si no muestra undefined

/**
 * Objetos: Métodos
 */
// Si dentro de una variable del objeto metemos una función (o una variable que contiene una función), 
// tendríamos lo que se denomina un método de un objeto.
const persona = {
    nombre: ['Mar', 'ina'],
    edad: 33,
    genero: 'femenino',
    intereses: ['música', 'lectura'],
    bio: function () {
        alert(this.nombre[0] + ' ' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    }
};
persona.bio();

/**
 * Objetos: Métodos - Método .toString()
 */
// .toString() es un método que intenta representar la información de ese objeto en un String
console.log(persona.toString()); // "[object Object]"

// Se puede crear una propiedad toString dentro del objeto, 
// que contenga una función que muestre el texto ideal para representar el objeto de información
const personaToString = {
    nombre: ['Mar', 'ina'],
    edad: 33,
    genero: 'femenino',
    intereses: ['música', 'lectura'],
    toString: function () {
        return `${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años. Le gusta ${this.intereses[0]} y ${this.intereses[1]}`;
    }
};
console.log(personaToString.toString()); // llama al método toString del objeto
console.log(personaToString); // muestra el objeto, llama al método toString del objeto
console.log("Persona toString:" + personaToString); // concatenación, utiliza toString del objeto

/**
 * Objetos: Desestructuración
 * Forma de extraer valores de objetos y asignarlos directamente a variables individuales
 * 
 */
function muestraNombre({nombre}) {
    console.log('El nombre es ' + nombre[0] + ' y el segundo nombre es ' + nombre[1]);
}
muestraNombre(personaToString);
const { edad: edadDivina, genero: holaQueHaces} = personaToString;
console.log(edadDivina);
console.log(holaQueHaces);

/**
 * Objetos: Desestructuración - Spread / Rest ...
 */
// Spread permite reutilizar objetos y recrear nuevos objetos a partir de otros 
const empleada = {
    ...personaToString, 
    puesto: 'profesora',
    salario: '10000',
    intereses: 'descansar'
    //Si se repiten las propiedades se sobreescriben
}
console.log(empleada);

// Rest permite agrupar el resto de elementos en una variable 
const [primero, ...resto] = [10, 20, 30, 40];
console.log(primero); // 10
console.log(resto);   // [20, 30, 40]

/**
 * Objetos: Desestructuración - Copia de objetos
 */

// Copia superficial con ... o Object.assign()
// Solo duplican las propiedades del primer nivel, 
// pero si hay objetos o arrays dentro, siguen apuntando al mismo espacio en memoria
const personaCopia = {
  nombre: ['Mar', 'ina'],
  edad: 33,
  intereses: ['música', 'lectura'],
};
const estudianteCopia = { ...personaCopia, etapa: 'Ciclo Formativo' };
estudianteCopia.nombre[0] = 'Bob';
console.log(personaCopia.nombre[0]); // 'Bob' — también cambia en el original

// Copia profunda con structuredClone()
// Crea una copia completa e independiente del objeto (incluyendo propiedades anidadas)
const personaClonar = {
  nombre: ['Mar', 'ina'],
  edad: 33,
  intereses: ['música', 'lectura'],
};
const estudianteClonar = {
  ...structuredClone(personaClonar),
  etapa: 'Ciclo Formativo',
};
estudianteClonar.nombre[0] = 'Bob';
console.log(personaClonar.nombre[0]); // 'Mar' — el original no se modifica

