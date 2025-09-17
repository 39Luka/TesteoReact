import { Producto } from "./producto.class.js";
import { ProductoService } from "./producto-service.js";

const productoService = new ProductoService();

const form = document.getElementById("formProducto");
const imgPreview = document.getElementById("imgPreview");

form.addEventListener("submit", async e => {
    e.preventDefault();
    const producto = new Producto(form.name.value, form.description.value, imgPreview.src);
    await productoService.add(producto);
    location.assign("index.html");
});

form.image.addEventListener("change", () => {
    const file = form.image.files[0];
    if(!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", () => {
        imgPreview.src = fileReader.result;
    });
});