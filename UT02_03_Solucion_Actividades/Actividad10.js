/**
 * Actividad: Manipulación de arrays con menú interactivo
 * ---------------------------------------
 * Métodos practicados:
 * push(), unshift(), pop(), shift(), slice(), join()
 */

function mostrarArray(arr) {
  console.log(`\nNúmero de elementos: ${arr.length}`);
  arr.forEach((elem, i) => console.log(`${i}: ${elem}`));
  console.log("----------------------");
}

function agregarConPush(arr) {
  arr.push("Videojuego", "Dragones");
  const nueva = prompt("Introduce una palabra para añadir al final:");
  if (nueva) arr.push(nueva);
  mostrarArray(arr);
}

function agregarConUnshift(arr) {
  arr.unshift("Videojuego", "Dragones");
  const nueva = prompt("Introduce una palabra para añadir al principio:");
  if (nueva) arr.unshift(nueva);
  mostrarArray(arr);
}

function eliminarConPop(arr) {
  const eliminado = arr.pop();
  console.log(`Elemento eliminado (pop): ${eliminado}`);
  mostrarArray(arr);
}

function eliminarConShift(arr) {
  const eliminado = arr.shift();
  console.log(`Elemento eliminado (shift): ${eliminado}`);
  mostrarArray(arr);
}

function crearSubArray(arr) {
  mostrarArray(arr);
  const inicio = parseInt(prompt("Índice inicial del nuevo array:"));
  const fin = parseInt(prompt("Índice final (no incluido):"));
  if (!isNaN(inicio) && !isNaN(fin)) {
    const nuevo = arr.slice(inicio, fin);
    console.log("Nuevo array creado:");
    mostrarArray(nuevo);
  } else {
    console.log("Debes introducir números válidos.");
  }
}

function unirConJoin(arr) {
  const separador = prompt("Introduce un carácter separador:");
  const cadena = arr.join(separador);
  console.log(`Cadena resultante: ${cadena}`);
  mostrarArray(arr);
}

function mostrarMenu() {
  console.log(`
    ===== MENÚ DE OPERACIONES =====
    1. Mostrar array
    2. Añadir elementos con push()
    3. Añadir elementos con unshift()
    4. Eliminar último elemento (pop)
    5. Eliminar primer elemento (shift)
    6. Crear subarray con slice()
    7. Unir elementos con join()
    8. Salir
    ===============================
    `);
}

function main() {
  let palabras = ["Dragonborn", "Skyrim", "Dovahkiin", "Dragon", "Fire", "Game"];
  let opcion;

  do {
    mostrarMenu();
    opcion = prompt("Elige una opción (1-8):");

    switch (opcion) {
      case "1":
        mostrarArray(palabras);
        break;
      case "2":
        agregarConPush(palabras);
        break;
      case "3":
        agregarConUnshift(palabras);
        break;
      case "4":
        eliminarConPop(palabras);
        break;
      case "5":
        eliminarConShift(palabras);
        break;
      case "6":
        crearSubArray(palabras);
        break;
      case "7":
        unirConJoin(palabras);
        break;
      case "8":
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
    }
  } while (opcion !== "8");
}

main();
