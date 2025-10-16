"use strict";

// Función para validar el producto.
function validarProducto(
  nombre = "Producto Genérico.",
  precio = 100,
  impuesto = 21
) {
  // Comprobamos si precio o impuesto no son números
  if (isNaN(precio) || isNaN(impuesto)) {
    return `Error. Número(s) no valido(s).`;
  } else {
    // Calculamos el precio final sumando el impuesto
    let precioFinal = precio + (precio * impuesto) / 100;
    return `Producto: ${nombre}   -   Precio: ${precioFinal}`;
  }
}

// Pruebas de la función
console.log(validarProducto());
console.log(validarProducto("Pelota", "q", 15));
console.log(validarProducto("Pelota", 50));
console.log(validarProducto("TV FHD", 875, 21));

/**
 * Ejemplos de ejecución:
 *
 * 1) Entrada: validarProducto()
 *    Salida en consola:
 *    Producto: Producto Genérico.   -   Precio: 121
 *
 * 2) Entrada: validarProducto("Pelota", "q", 15)
 *    Salida en consola:
 *    Error. Número(s) no valido(s).
 *
 * 3) Entrada: validarProducto("Pelota", 50)
 *    Salida en consola:
 *    Producto: Pelota   -   Precio: 60.5
 *
 * 4) Entrada: validarProducto("TV FHD", 875, 21)
 *    Salida en consola:
 *    Producto: TV FHD   -   Precio: 1058.75
 */
