# Informe de Testing - Silvia Cachón Leiva
## Actividad 1
* **Reto:** Comprueba que el componente List muestra correctamente el nombre pasado por props y que, si la película tiene una nota de 10, el título aparece en color rojo (clase text-red-600).


* **Prompt IA:** Le he pasado los criterios de evalucion y luego el enunciado de la actividad y el componente List.jsx.


* **Explicación del Test:** 

Este test sigue el patrón **AAA (Arrange, Act, Assert)**, que ayuda a organizar las pruebas de manera clara.

**Arrange (Preparar)**  
- Primero se renderiza el componente `List` usando `render()` y se le pasan las props necesarias para comprobarlo.

**Act (Actuar)**  
Para buscar los elementos usamos selectores como `getByRole`.

- `getByRole("article")`: Encuentra el `<article>` que envuelve el componente, usando su `aria-label`.


**Assert (Afirmar)**  
- Por último, con `expect()` comprobamos que el resultado es el correcto.  
    - Por ejemplo, que el nombre se muestre en pantalla o que el título tenga la clase `text-red-600` cuando la película tiene nota 10.



![alt text](actividad1.png)

## Actividad 2
* **Reto:** Verifica que el componente List renderiza correctamente el contenido que se le pasa a través de children (por ejemplo la clasificación o biografía) y comprueba que la imagen tiene el atributo alt correcto basado en el nombre del intérprete o de la película.

* **Prompt IA:** Le pasé el enunciado de la actividad y el componente.

* **Explicación del Test:** 

Este test sigue el patrón **AAA (Arrange, Act, Assert)**, que sirve para organizar bien los tests y que sean fáciles de leer.

**Arrange (Preparar)**  
- Primero se renderiza el componente `List` usando `render()` y se le pasan las props necesarias.

**Act (Actuar)**  
Para buscar los elementos usamos selectores como:

- `getByRole("article")`: Encuentra el `<article>` que envuelve el componente, usando su `aria-label`.
- `within(article).getByText("…", { selector: "p" })`: Busca el texto*solo dentro del `<p>`, evitando elementos ocultos como `<figcaption>`.
- `getByAltText`: Busca la imagen usando su atributo `alt`.

**Assert (Afirmar)**  
Por último, con `expect()` comprobamos que el resultado es correcto:

- Que el texto de `children` aparezca dentro del `<p>` del componente.
- Que la imagen tenga el `alt` correcto basado en el nombre del intérprete.


![alt text](actividad2.png)


## Actividad 3
* **Reto:** En FormularioPeliculaControlado.jsx, verifica que, si el usuario intenta enviar el formulario con el nombre vacío, aparece el mensaje "El nombre es obligatorio".

* **Prompt IA:** Le pasé el enunciado de la actividad y el componente.

* **Explicación del Test:** 

Este test sigue el patrón **AAA (Arrange, Act, Assert)**, que sirve para organizar bien los tests y que sean fáciles de leer.

**Arrange (Preparar)**  
- Se renderiza el componente FormularioPeliculaControlado usando `render()`.

- No se rellenan campos para simular que el usuario envía el formulario vacío.

**Act (Actuar)**  

- Se busca el botón de envío con `getByRole("button", { name: /Añadir Película/i })`.
- Se simula un click sobre el botón de submit usando `fireEvent.click(submitButton)`.

**Assert (Afirmar)**  
- Se comprueba que el mensaje de error "El nombre es obligatorio." aparece en el DOM con `expect(screen.getByText("El nombre es obligatorio.")).toBeInTheDocument()`.


![alt text](actividad3.png)

## Actividad 4
* **Reto:** En FormularioInterprete.jsx, valida que, si la biografía tiene menos de 50 caracteres, aparece el error: "La biografía debe tener al menos 50 caracteres".

* **Prompt IA:** Le pasé el enunciado de la actividad y el componente.

* **Explicación del Test:** 

Este test sigue el patrón **AAA (Arrange, Act, Assert)**, que sirve para organizar bien los tests y que sean fáciles de leer.

**Arrange (Preparar)**  
- Se renderiza el componente `FormularioInterprete` usando `render()`.  

- Se identifican los campos del formulario mediante selectores accesibles (`getByLabelText`, `getByRole`) para simular la interacción del usuario.

**Act (Actuar)**  

- Se rellenan los campos obligatorios con valores válidos, excepto la biografía, que se deja con un texto demasiado corto (`"Biografía corta"`).  

- Se dispara el evento `click` sobre el botón de envío (`Añadir Intérprete`) usando `fireEvent.click()`.

**Assert (Afirmar)**  
- Se comprueba que el mensaje de error se muestra en pantalla.  

![alt text](actividad4.png)

## Actividad 5
* **Reto:** Verifica que al rellenar el título en el formulario controlado FormularioPeliculaControlado.jsx y pulsar enviar, el campo vuelve a estar vacío (reset).

* **Prompt IA:** Le pasé el enunciado de la actividad y el componente.

* **Explicación del Test:** 

Este test sigue el patrón **AAA (Arrange, Act, Assert)**, que sirve para organizar bien los tests y que sean fáciles de leer.

**Arrange (Preparar)**  
- Se renderiza el componente FormularioPeliculaControlado usando `render()`.
- Se obtiene el input del nombre y el botón de envío usando `screen.getByLabelText` y `screen.getByRole`.

**Act (Actuar)**  

- Se simula que el usuario escribe un título de película en el input `(userEvent.type(nombreInput, "Inception"))`. 

- Se simula el envío del formulario con `userEvent.click(botonSubmit)`.

**Assert (Afirmar)**  
- Se comprueba que, después del envío, el campo del nombre esté vacío `(expect(nombreInput.value).toBe(""))`, confirmando que el formulario se ha reseteado correctamente. 

![alt text](actividad5.png)

## Actividad 6
* **Reto:** Comprueba que el buscador en Peliculas.jsx funciona, aunque el usuario escriba en minúsculas (ej: "sexto" para encontrar "El sexto sentido"). 

* **Prompt IA:** Le pasé el enunciado de la actividad y el componente.

* **Explicación del Test:** 

Este test sigue el patrón **AAA (Arrange, Act, Assert)**, que sirve para organizar bien los tests y que sean fáciles de leer.

**Arrange (Preparar)**  
- Se renderiza el componente Peliculas dentro de un `MemoryRouter`, ya que el componente utiliza `Link` de `react-router-dom` y necesita un contexto de enrutado para funcionar correctamente en el entorno de testing.

- Además, se localiza el campo de búsqueda utilizando el placeholder `"Buscar películas por nombre..."`.

**Act (Actuar)**  

- Se simula la escritura del usuario en el campo de búsqueda usando `userEvent.type`, introduciendo el texto "sexto" en minúsculas.. 

- Esto imita el comportamiento real de un usuario escribiendo en el buscador.

**Assert (Afirmar)**  
- Por último, se comprueba que la película "El sexto sentido" aparece en el documento, lo que confirma que el filtrado no distingue entre mayúsculas y minúsculas y funciona correctamente.

![alt text](actividad6.png)