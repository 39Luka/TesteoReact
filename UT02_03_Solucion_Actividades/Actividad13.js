// Creamos un array vacío con espacio reservado para 5 sueldos
const sueldos = new Array(5);

// Función para pedir los sueldos al usuario
const cargar = (array) => {
  for (let i = 0; i < array.length; i++) {
    const input = prompt(`Introduce el sueldo del operario ${i + 1}:`);
    const sueldo = Number(input);

    if (isNaN(sueldo) || sueldo < 0) {
      alert("Por favor, introduce un número válido y positivo.");
      i--; // Repetimos esta posición
      continue;
    }
    array[i] = sueldo;
  }
};

// Función que calcula el gasto total con reduce()
const calcularGastos = (array) => array.reduce((acc, valor) => acc + valor, 0);

// Función que muestra los resultados formateados en consola
const mostrarResultados = (array) => {
  console.clear();
  console.log("Sueldos de los operarios:");
  array.forEach((sueldo, i) => console.log(`Operario ${i + 1}: ${sueldo} €`));

  const total = calcularGastos(array);
  console.log(`\nGasto total en sueldos: ${total} €`);
};

cargar(sueldos);
mostrarResultados(sueldos);
