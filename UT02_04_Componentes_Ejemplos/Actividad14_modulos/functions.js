// ==============================
// Funciones para gestionar artistas
// ==============================

/**
 * Devuelve un array con los artistas que son solistas.
 * @param {Array} artistasArray - Array de artistas
 * @returns {Array} - Array de artistas solistas
 */
function artistasSolistas(artistasArray) {
  return artistasArray.filter(a => a.solista);
}

/**
 * Salida:
 * Artistas solistas:
 * Array(53) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
 * 0: Object { nombre: "Ochoa Chang", solista: true, edad: 33, … }
 * 1: Object { nombre: "Blevins Hardy", solista: true, edad: 40, … }
 * 2: Object { nombre: "Loretta Short", solista: true, edad: 25, … }
 * ...
 * 52: Object { nombre: "Terri Hendrix", solista: true, edad: 39, … }
 */

/**
 * Devuelve los artistas que tengan la edad indicada.
 * @param {number} edad - Edad a filtrar
 * @param {Array} artistasArray - Array de artistas
 * @returns {Array} - Array de artistas con la edad indicada
 */
function artistasPorEdad(edad, artistasArray) {
  return artistasArray.filter(a => a.edad === edad);
}

/**
 * Salida:
 * Artistas con 23 años:
 * Array [ {…} ]
 * 0: Object { nombre: "Luz Jackson", solista: true, edad: 23, … }
 * 
 */

/**
 * Cuenta la cantidad de artistas por instrumento.
 * @param {Array} artistasArray - Array de artistas
 * @returns {Object} - Objeto { instrumento: cantidad }
 */
// function cantidadDeArtistasPorInstrumento(artistasArray) {
//   return artistasArray.reduce((acc, a) => {
//     acc[a.instrumento] = (acc[a.instrumento] || 0) + 1;
//     return acc;
//   }, []);// valor inicial: array vacío
// }

// function cantidadDeArtistasPorInstrumento(artistasArray) {
//   return artistasArray.reduce((acc, a) => {
//     acc[a.instrumento] = 
//       (acc[a.instrumento] || 0) + 1; 
//       // si acc[a.instrumento] existe utiliza el valor de esta propiedad; 
//       // si no --> no está definida y utiliza 0
//       // a todo esto le suma 1
//     return acc;
//   }, {});// valor inicial: objeto vacío
// }

function cantidadDeArtistasPorInstrumento(artistasArray) {
  // Creamos un objeto vacío para ir guardando los resultados
  const conteo = {};

  // Recorremos cada artista del array
  for (const artista of artistasArray) {
    const instrumento = artista.instrumento;

    // Si el instrumento aún no existe como propiedad, la inicializamos en 0
    if (!conteo[instrumento]) {
      conteo[instrumento] = 0;
    }

    // Sumamos 1 al contador de ese instrumento
    conteo[instrumento]++;
  }

  // Devolvemos el objeto con los resultados finales
  return conteo;
}
/**
 * Salida:
 * Cantidad de artistas por instrumento:
 * Object { "batería": 20, teclado: 20, voz: 10, guitarra: 25, bajo: 25 }
 * 
 */

/**
 * Cuenta la cantidad de artistas por género.
 * @param {Array} artistasArray - Array de artistas
 * @returns {Object} - Objeto { genero: cantidad }
 */
function cantidadDeArtistasPorGenero(artistasArray) {
  return artistasArray.reduce((acc, a) => {
    acc[a.genero] = (acc[a.genero] || 0) + 1;
    return acc;
  }, {});
}
/**
 * Salida:
 * Cantidad de artistas por género:
 * Object { punk: 14, grunge: 16, pop: 16, reggae: 12, rock: 15, cumbia: 12, heavy: 15 }
 * 
 */

/**
 * Devuelve los artistas que tienen más discos que la cantidad indicada,
 * ordenados de mayor a menor según cantidad de discos.
 * @param {number} cantidadDeDiscos
 * @param {Array} artistasArray
 * @returns {Array}
 */
function artistasConMasDiscosQue(cantidadDeDiscos, artistasArray) {
  return artistasArray
    .filter(a => a.discos.length > cantidadDeDiscos)
    .sort((a, b) => b.discos.length - a.discos.length);
}
/**
 * Salida:
 * Artistas con más de 5 discos:
 * Array(47) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
 * 0: Object { nombre: "Elise Walker", solista: true, edad: 33, … }
 * 1: Object { nombre: "Ester Lara", solista: false, edad: 34, … }
 * ...
 * 46: Object { nombre: "Ward Randall", solista: false, edad: 26, … }
 */

/**
 * Devuelve el artista que más entradas vendió en su último recital.
 * @param {Array} artistasArray
 * @returns {Object} - Artista
 */
function artistaConMasEntradasVendidas(artistasArray) {
  return artistasArray.reduce((max, a) =>
    a.ultimoRecital.entradasVendidas > (max?.ultimoRecital?.entradasVendidas || 0) ? a : max
  , null);
}
/**
 * Salida:
 * Artista con más entradas vendidas:
 * Object { nombre: "Luz Jackson", solista: true, edad: 23, instrumento: "guitarra", paisNacimiento: "Taiwan", ultimoRecital: {…}, discos: (4) […], genero: "heavy" }
 * 
 */

/**
 * Devuelve el artista que más recaudó en su último recital.
 * @param {Array} artistasArray
 * @returns {Object} - Artista
 */
function artistaConMayorRecaudacion(artistasArray) {
  return artistasArray.reduce((max, a) => {
    const recaudacion = a.ultimoRecital.entradasVendidas * a.ultimoRecital.costoEntradas;
    const maxRecaudacion = max.ultimoRecital.entradasVendidas * max.ultimoRecital.costoEntradas;
    return recaudacion > maxRecaudacion ? a : max;
  }, artistasArray[0]);
}
/**
 * Salida:
 * Artista con mayor recaudación:
 * Object { nombre: "Page Spence", solista: false, edad: 30, instrumento: "teclado", paisNacimiento: "Belarus", ultimoRecital: {…}, discos: (8) […], genero: "heavy" }
 * 
 */

/**
 * Devuelve los artistas que tienen al menos un disco en el año indicado.
 * @param {number} anyo
 * @param {Array} artistasArray
 * @returns {Array}
 */
function artistasConDiscoEnAnyo(anyo, artistasArray) {
  return artistasArray.filter(a => a.discos.some(d => d.anioLanzamiento === anyo));
}
/**
 * Salida:
 * Artistas con disco en 2000:
 * Array(16) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
 * 0: Object { nombre: "Jill Booker", solista: true, edad: 36, … }
 * 1: Object { nombre: "Hale Horne", solista: false, edad: 22, … }
 * ...
 * 15: Object { nombre: "Faye Duffy", solista: false, edad: 29, … }
 * 
 */

/**
 * Devuelve el artista que más copias de discos en total ha vendido.
 * @param {Array} artistasArray
 * @returns {Object} - Artista
 */
function artistaConMasCopias(artistasArray) {
  return artistasArray.reduce((max, a) => {
    const totalCopias = a.discos.reduce((sum, d) => sum + d.copiasVendidas, 0);
    const maxCopias = max.discos.reduce((sum, d) => sum + d.copiasVendidas, 0);
    return totalCopias > maxCopias ? a : max;
  }, artistasArray[0]);
}
/**
 * Salida:
 * Artista con más copias vendidas:
 * Object { nombre: "Blackwell Bauer", solista: false, edad: 32, instrumento: "bajo", paisNacimiento: "Chad", ultimoRecital: {…}, discos: (10) […], genero: "rock" }
 * 
 */
// Añade el elemento 'name' al módulo de exportación.
export {
  artistasSolistas,
  artistasPorEdad,
  cantidadDeArtistasPorInstrumento,
  cantidadDeArtistasPorGenero,
  artistasConMasDiscosQue,
  artistaConMasEntradasVendidas,
  artistaConMayorRecaudacion,
  artistasConDiscoEnAnyo,
  artistaConMasCopias
};
