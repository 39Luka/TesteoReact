import { artistas } from './data-artistas.js';
import {
  artistasSolistas,
  artistasPorEdad,
  cantidadDeArtistasPorInstrumento,
  cantidadDeArtistasPorGenero,
  artistasConMasDiscosQue,
  artistaConMasEntradasVendidas,
  artistaConMayorRecaudacion,
  artistasConDiscoEnAnyo,
  artistaConMasCopias
} from './functions.js';

// ==============================
// Menú interactivo para el usuario
// ==============================

function menu() {
  let opcion;
  do {
    opcion = prompt(
      `Elige una opción:
      1 - Artistas solistas
      2 - Artistas por edad
      3 - Cantidad de artistas por instrumento
      4 - Cantidad de artistas por género
      5 - Artistas con más discos que...
      6 - Artista con más entradas vendidas
      7 - Artista con mayor recaudación
      8 - Artistas con disco en año
      9 - Artista con más copias vendidas
      0 - Salir`
    );

    switch(opcion) {
      case '1':
        console.log('Artistas solistas:');
        console.log(artistasSolistas(artistas));
        break;
      case '2':
        const edad = parseInt(prompt('Introduce la edad:'));
        console.log(`Artistas con ${edad} años:`);
        console.log(artistasPorEdad(edad, artistas));
        break;
      case '3':
        console.log('Cantidad de artistas por instrumento:');
        console.log(cantidadDeArtistasPorInstrumento(artistas));
        break;
      case '4':
        console.log('Cantidad de artistas por género:');
        console.log(cantidadDeArtistasPorGenero(artistas));
        break;
      case '5':
        const cantDiscos = parseInt(prompt('Introduce la cantidad de discos:'));
        console.log(`Artistas con más de ${cantDiscos} discos:`);
        console.log(artistasConMasDiscosQue(cantDiscos, artistas));
        break;
      case '6':
        console.log('Artista con más entradas vendidas:');
        console.log(artistaConMasEntradasVendidas(artistas));
        break;
      case '7':
        console.log('Artista con mayor recaudación:');
        console.log(artistaConMayorRecaudacion(artistas));
        break;
      case '8':
        const anyo = parseInt(prompt('Introduce el año:'));
        console.log(`Artistas con disco en ${anyo}:`);
        console.log(artistasConDiscoEnAnyo(anyo, artistas));
        break;
      case '9':
        console.log('Artista con más copias vendidas:');
        console.log(artistaConMasCopias(artistas));
        break;
      case '0':
        console.log('Saliendo...');
        break;
      default:
        console.log('Opción no válida');
    }
  } while(opcion !== '0');
}

// Ejecutamos el menú al cargar la página
menu();
