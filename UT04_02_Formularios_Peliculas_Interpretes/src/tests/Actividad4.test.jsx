import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FormularioInterprete from "../components/FormularioInterprete";

describe("FormularioInterprete", () => {
  it('muestra error "La biografía debe tener al menos 50 caracteres" si la biografía es demasiado corta', () => {
    // Arrange: renderizamos el formulario
    render(<FormularioInterprete />);

    // Act: rellenamos los campos obligatorios con valores válidos excepto la biografía
    const nombreInput = screen.getByLabelText(/Nombre/i);
    fireEvent.change(nombreInput, { target: { value: "Marina" } });

    const peliculaSelect = screen.getByLabelText(/Película/i);
    fireEvent.change(peliculaSelect, { target: { value: "Pulp Fiction" } });

    const biografiaInput = screen.getByLabelText(/Biografía/i);
    fireEvent.change(biografiaInput, { target: { value: "Biografía corta" } }); // < 50 caracteres

    const imagenInput = screen.getByLabelText(/URL Imagen/i);
    fireEvent.change(imagenInput, { target: { value: "https://ejemplo.com/imagen.jpg" } });

    // Submit
    const submitButton = screen.getByRole("button", { name: /Añadir Intérprete/i });
    fireEvent.click(submitButton);

    // Assert: comprobamos que el mensaje de error se muestra
    expect(
      screen.getByText(/La biografía debe tener al menos 50 caracteres/i)
    ).toBeInTheDocument();
  });
});