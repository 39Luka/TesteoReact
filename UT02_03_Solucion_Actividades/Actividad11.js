// Array de personas: [nombre, edad, cargo]
const personas = [
  ["Juan", 36, "Administrativo"],
  ["Luisa", 60, "Profesor"],
  ["Pepe", 31, "Estudiante"],
  ["Rosa", 75, "Estudiante"],
  ["Adrián", 47, "Profesor"],
  ["Toñi", 48, "Administrativo"],
  ["Agustín", 50, "Profesor"],
  ["Fermín", 64, "Estudiante"],
  ["Blas", 36, "Estudiante"],
  ["Zoraida", 36, "Estudiante"],
  ["Felipe", 25, "Estudiante"],
  ["Ana", 20, "Estudiante"],
  ["Pedro", 19, "Estudiante"],
  ["Jose", 47, "Profesor"],
  ["Juan", 16, "Estudiante"],
  ["Miriam", 15, "Estudiante"]
];

// Orden de prioridad de los cargos
const prioridadCargo = { "Profesor": 1, "Administrativo": 2, "Estudiante": 3 };

// Función de comparación personalizada
function comparar(a, b) {
  // Ordenar por cargo
  if (prioridadCargo[a[2]] !== prioridadCargo[b[2]]) {
    return prioridadCargo[a[2]] - prioridadCargo[b[2]];
  }
  // Si el cargo es el mismo, ordenar por edad descendente
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }
  // Si edad igual, ordenar por nombre ascendente
  return a[0].localeCompare(b[0]);
}

// Ordenamos el array
personas.sort(comparar);

// Mostramos el resultado por consola
console.log("Array ordenado:", personas);

// Mostramos frases descriptivas
console.log("\nDetalle:");
personas.forEach(p => {
  console.log(`${p[0]} de ${p[1]} años es ${p[2]}`);
});
