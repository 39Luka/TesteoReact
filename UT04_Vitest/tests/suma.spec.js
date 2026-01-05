import { describe, test, it, expect } from "vitest";
import { suma } from "../src/suma.js";

/**
 * Estructura del test:
 * - describe: Agrupa las pruebas de forma lógica.
 * - test o it: Define un caso de prueba específico.
 * - expect: Realiza la verificación de resultados.
 */
describe("Función Suma: Tipo y Caracteres", () => {
    it('Suma debe ser una función', () => {
        expect(typeof suma).toBe('function');
    });
    test("debe sumar correctamente dos números positivos", () => {
        expect(suma("hola", 3)).toBe("hola3"); // Prueba que 2 + 3 = 5
    });
});
describe("Función Suma: Números Negativos y Ceros", () => {
    it("debe manejar números negativos", () => {
        expect(suma(-2, -3)).toBe(-5); // Prueba con números negativos
    });

    test("debe devolver 0 si ambos números son 0", () => {
        expect(suma(0, 0)).toBe(0); // Prueba con ceros
    });
});
