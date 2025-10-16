"use strict";

// Función principal del juego
function jugarAdivinaNumero() {
    const numeroSecreto = generarNumeroAleatorio(1, 100); // Número secreto aleatorio entre 1 y 100

    while (true) {
        const intento = obtenerIntentoUsuario(); // Pedimos intento al usuario
        if (intento === null) {
            alert("Has cancelado el juego.");
            break;
        }
        if (!esNumeroValido(intento)) {
            alert("Eso no es un número válido. Intenta de nuevo.");
            continue;
        }

        const resultado = compararNumero(intento, numeroSecreto); // Comparamos intento con número secreto
        alert(resultado);

        if (resultado.includes("Felicidades")) break;
    }
}

// Genera un número aleatorio entre min y max (inclusive)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Obtiene el intento del usuario y lo convierte a número
function obtenerIntentoUsuario() {
    const entrada = prompt("Adivina el número entre 1 y 100 (o pulsa Cancelar para salir):");
    return entrada !== null ? Number(entrada) : null;
}

// Comprueba si el valor es un número válido
function esNumeroValido(valor) {
    return !isNaN(valor);
}

// Compara el intento con el número secreto y devuelve mensaje
function compararNumero(intento, secreto) {
    if (intento === secreto) return "¡Felicidades! Has adivinado el número.";
    return intento < secreto ? "El número que buscas es mayor." : "El número que buscas es menor.";
}

// Para jugar, solo llamamos:
jugarAdivinaNumero();

/**
 * Ejemplo de ejecución (suponiendo que el número secreto sea 42):
 *
 * Usuario introduce: 50
 * Salida: "El número que buscas es menor."
 *
 * Usuario introduce: 30
 * Salida: "El número que buscas es mayor."
 *
 * Usuario introduce: 42
 * Salida: "¡Felicidades! Has adivinado el número."
 *
 * Usuario pulsa Cancelar en cualquier momento:
 * Salida: "Has cancelado el juego."
 */