
import { describe, it, expect } from "vitest";
import { sumArray, findMax, filterEvenNumbers } from "../src/arrays.js";

describe("Tests sobre sumArray", () => {
  it("debe devolver la suma de todos los elementos del array", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
    expect(sumArray([0, -1, 1])).toBe(0);
  });

  it("debe devolver 0 para un array vacío", () => {
    expect(sumArray([])).toBe(0);
  });
});

describe("Tests sobre findMax", () => {
  it("debe devolver el valor máximo del array", () => {
    expect(findMax([1, 2, 3, 4])).toBe(4);
    expect(findMax([-10, -5, 0, 5])).toBe(5);
  });

  it("debe generar un error si el array está vacío", () => {
    expect(() => findMax([])).toThrow("El array está vacío");
  });
});

describe("Tests sobre filterEvenNumbers", () => {
  it("debe devolver solo los números pares del array", () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filterEvenNumbers([-2, -1, 0, 1])).toEqual([-2, 0]);
  });

  it("debe devolver un array vacío si no hay números pares", () => {
    expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
  });

  it("debe devolver un array vacío para un array vacío", () => {
    expect(filterEvenNumbers([])).toEqual([]);
  });
});
