function nombreDelGato(nombre) {
    console.log("El nombre de mi gato es " + nombre);
  }
  
  nombreDelGato("Maurizzio");
//  El resultado del código es: "El nombre de mi gato es Maurizzio"
  

/**
 * Ejemplo de Hoisting con funciones
 */
nombreDelGato2("Dumas");

function nombreDelGato2(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}
// El resultado del código es: "El nombre de mi gato es Dumas"
