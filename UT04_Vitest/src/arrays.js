// Suma los elementos de un array
export function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
  
// Encuentra el valor máximo en un array
export function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("El array está vacío");
    }
    return Math.max(...arr);
}

// Filtra los números pares en un array
export function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
  