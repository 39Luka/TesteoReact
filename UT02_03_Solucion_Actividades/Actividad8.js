
// Definir la lista de nombres
var firstNames = ["Juan", "Pedro", "Luis", "María", "Julia"];

const mostrar = () => console.log(firstNames);

// Obtener el nombre propio del usuario
const getUserFirstName = () => prompt("Introduce un nombre para buscar:", "Juan");

const buscarItem = (list, firstName) => list.indexOf(firstName);

mostrar();
var firstName = getUserFirstName();
var index = buscarItem(firstNames, firstName);
if (index >= 0) {
    console.log("El nombre " + firstName + " está en la posición " + index + " [base 0] en la lista.");
} else {
    console.log("El nombre " + firstName + " no está en la lista.");
}


