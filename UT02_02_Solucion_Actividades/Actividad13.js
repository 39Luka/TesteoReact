"use strict";

// Función para calcular el volumen de una esfera
function calcularVolumen(radio) {
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
}

// Función para calcular la superficie de una esfera
function calcularSuperficie(radio) {
    return 4 * Math.PI * Math.pow(radio, 2);
}

// Función principal del programa con menú
function calculadoraEsfera() {
    // Solicitar al usuario el radio de la esfera
    let radio = prompt("Introduce el radio de la esfera:");

    // Convertimos el valor a número
    radio = Number(radio);

    // Validación del radio
    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, introduce un número válido mayor que 0.");
        return; // Salimos del programa si el radio es inválido
    }

    let opcion;
    do {
        // Mostrar menú de opciones
        opcion = prompt(
            "Elige una opción:\n" +
            "1. Calcular volumen de la esfera\n" +
            "2. Calcular superficie de la esfera\n" +
            "3. Calcular ambos (volumen y superficie)\n" +
            "4. Salir"
        );

        // Convertir la opción a número
        opcion = Number(opcion);

        // Ejecutar según la opción elegida
        switch(opcion) {
            case 1:
                // Opción 1: calcular volumen
                alert(`Volumen de la esfera: ${calcularVolumen(radio).toFixed(2)}`);
                break;
            case 2:
                // Opción 2: calcular superficie
                alert(`Superficie de la esfera: ${calcularSuperficie(radio).toFixed(2)}`);
                break;
            case 3:
                // Opción 3: calcular ambos
                alert(
                    `Volumen de la esfera: ${calcularVolumen(radio).toFixed(2)}\n` +
                    `Superficie de la esfera: ${calcularSuperficie(radio).toFixed(2)}`
                );
                break;
            case 4:
                // Opción 4: salir
                alert("¡Gracias por usar la calculadora de esferas!");
                break;
            default:
                // Opción inválida
                alert("Opción inválida. Por favor, elige entre 1 y 4.");
        }
    } while(opcion !== 4); // Repetir hasta que el usuario elija salir
}

// Ejecutar la calculadora
calculadoraEsfera();

/**
 * Ejemplo de ejecución (usuario introduce radio = 5):
 *
 * Menú:
 * 1. Calcular volumen de la esfera
 * 2. Calcular superficie de la esfera
 * 3. Calcular ambos (volumen y superficie)
 * 4. Salir
 *
 * Entrada: 3
 * Salida:
 * Volumen de la esfera: 523.60
 * Superficie de la esfera: 314.16
 *
 * Entrada: 4
 * Salida:
 * ¡Gracias por usar la calculadora de esferas!
 *
 * Entrada inválida (ej. 7)
 * Salida:
 * Opción inválida. Por favor, elige entre 1 y 4.
 */
