import { ProductoService } from "./producto-service.js";

const productoService = new ProductoService();

const productTemplate = document.getElementById("productTemplate");
const tbody = document.querySelector("#products tbody");


async function getProductos() {
    const productos = await productoService.getProductos();
    productos.forEach(showProducto);
}

async function showProducto(producto) {
    const clone = productTemplate.content.cloneNode(true);
    const tr = clone.children[0];
    tr.querySelector("img").src = producto.photo;
    tr.children[1].textContent = producto.name;
    tr.children[2].textContent = producto.description;
    tr.querySelector("button.delete").addEventListener("click", async () => {
        //await productoService.delete(producto.id); // JSON-Mock
        await productoService.delete(producto._id); // MongoDB
        tr.remove();
    });
    tbody.append(tr);
}

getProductos();

