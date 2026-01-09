import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Peliculas from "../pages/Peliculas";

describe("Peliculas", () => {
  it('muestra el mensaje "No se encontraron películas con el término Iron Man" cuando no hay resultados', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <Peliculas />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(
      "Buscar películas por nombre..."
    );

    // Act
    await userEvent.type(searchInput, "Iron Man");

    // Assert
    const mensaje = screen.getByText(
      'No se encontraron películas con el término `Iron Man`.'
    );
    expect(mensaje).toBeInTheDocument();
  });
});
