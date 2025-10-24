// Solicita al usuario la cadena con formato: nombre:apellidos:telefono:email:codigopostal
const datos = prompt("Introduce los datos en formato: nombre:apellidos:telefono:email:codigopostal");

try {
    if (!datos || datos.split(':').length !== 5) {
        throw new Error("Formato incorrecto");
    } 
    // Divide la cadena usando ':' como separador
    const partes = datos.split(':');

    // Asigna cada parte a una variable
    const [nombre, apellidos, telefono, email, codigoPostal] = partes;

    // Divide el email en dirección y servidor
    const [direccion, servidor] = email.split('@');

    // Muestra la información desglosada
    console.log("Información desglosada:");
    console.log("Código postal:", codigoPostal);
    console.log("Apellidos:", apellidos);
    console.log("Email:", email);
    console.log("Servidor asociado:", servidor);

    // Versión opcional con salida más vistosa
    alert(`Información desglosada:
    Código postal: ${codigoPostal}
    Apellidos: ${apellidos}
    Email: ${email}
    Servidor: ${servidor}`);
} catch (error) {
    console.error("Error: Datos introducidos incorrectos");
    throw error;
}

