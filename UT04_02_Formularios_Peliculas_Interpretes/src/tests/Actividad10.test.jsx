// src/tests/Actividad10.test.jsx
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FormularioPeliculaNoControlado from "../components/FormularioPeliculaNoControlado";

describe("FormularioPeliculaNoControlado", () => {
  it("valida los datos solo al hacer clic en el botón de enviar", () => {
    // Arrange: renderizamos el componente y obtenemos los elementos necesarios
    render(<FormularioPeliculaNoControlado />);
    const nombreInput = screen.getByLabelText(/Nombre/i);
    const submitButton = screen.getByRole("button", { name: /Añadir Película/i });

    // Act 1: escribimos un valor inválido (vacío)
    fireEvent.change(nombreInput, { target: { value: "" } });
    // Assert 1: el mensaje de error aún no aparece
    expect(screen.queryByText(/El nombre es obligatorio/i)).not.toBeInTheDocument();

    // Act 2: pulsamos el botón de enviar
    fireEvent.click(submitButton);
    // Assert 2: ahora sí aparece el mensaje de error
    expect(screen.getByText(/El nombre es obligatorio/i)).toBeInTheDocument();
  });
});
