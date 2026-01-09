// src/tests/Actividad5.test.jsx
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FormularioPeliculaControlado from "../components/FormularioPeliculaControlado.jsx";

describe("FormularioPeliculaControlado", () => {
  it("resetea el formulario después de enviar una película", () => {
    // Arrange
    render(<FormularioPeliculaControlado />);

    // Act: rellenamos todos los campos requeridos para que no haya errores
    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: "Inception" } });
    fireEvent.change(screen.getByLabelText(/Director/i), { target: { value: "Christopher Nolan" } });
    fireEvent.change(screen.getByLabelText(/Clasificación/i), { target: { value: "Acción" } });
    fireEvent.change(screen.getByLabelText(/Nota/i), { target: { value: "9" } });
    fireEvent.change(screen.getByLabelText(/URL Cartelera/i), { target: { value: "http://example.com/cartel.jpg" } });

    // Pulsamos enviar
    fireEvent.click(screen.getByRole("button", { name: /Añadir Película/i }));

    // Assert: todos los campos se han reseteado
    expect(screen.getByLabelText(/Nombre/i).value).toBe("");
    expect(screen.getByLabelText(/Director/i).value).toBe("");
    expect(screen.getByLabelText(/Clasificación/i).value).toBe("");
    expect(screen.getByLabelText(/Nota/i).value).toBe("");
    expect(screen.getByLabelText(/URL Cartelera/i).value).toBe("");
  });
});
