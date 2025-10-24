"use strict";

const dniInicial = 48357001;
const dniFinal = 48357999;

// Función que calcula la letra de los DNI y los añade a un String.
function contarDni(letra) {
  let todosLosDnis = "";
  let secuenciaLetrasNIF = "TRWAGMYFPDXBNJZSQVHLCKE";
  let contador = 0;
  for (let i = dniInicial; i <= dniFinal; i++) {
    if (letra == secuenciaLetrasNIF.charAt(i % 23)) {
      contador++;
      todosLosDnis = todosLosDnis.concat(i + letra.concat("   "));
    }
  }
  console.log(`Hay ${contador} DNI entre ${dniInicial} y ${dniFinal}`);
  return todosLosDnis;
}

/**
 * Ejemplo de ejecución:
 * 
 * Hay 43 Dnis entre 48357001 y 48357999 
 * 48357012H   48357035H   48357058H   48357081H   48357104H   48357127H   48357150H   
 * 48357173H   48357196H   48357219H   48357242H   48357265H   48357288H   48357311H   
 * 48357334H   48357357H   48357380H   48357403H   48357426H   48357449H   48357472H   
 * 48357495H   48357518H   48357541H   48357564H   48357587H   48357610H   48357633H   
 * 48357656H   48357679H   48357702H   48357725H   48357748H   48357771H   48357794H   
 * 48357817H   48357840H   48357863H   48357886H   48357909H   48357932H   48357955H   
 * 48357978H  
 * 
 */
console.log(contarDni("H"));


