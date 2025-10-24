// Función que pide números hasta que el usuario escriba 'x'
function pideYComprueba() {
  const numeros = [];
  let entrada;

  while (true) {
    entrada = prompt("Introduce un número entero (o 'x' para salir):");
    if (entrada.toLowerCase() === "x") break;

    const num = parseInt(entrada);
    if (!isNaN(num)) {
      numeros.push(num);
    } else {
      alert("Eso no es un número entero válido.");
    }
  }

  return numeros;
}

// Función que modifica el array original dividiendo sus elementos por 2
function mitad(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] / 2;
  }
  return array;
}

// Función que crea un nuevo array con los valores divididos por 2
function porlaMitad(array) {
  return array.map(num => num / 2);
}

/**
 * Ejemplo de uso de las funciones
 */
const numeros = pideYComprueba();
console.log("Números introducidos:", numeros);

const modificados = [...numeros]; // copia para comparar
mitad(modificados);
console.log("Array modificado (mitad):", modificados);

const nuevos = porlaMitad(numeros);
console.log("Array nuevo (por la mitad):", nuevos);
