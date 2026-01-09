import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Peliculas from "../pages/Peliculas";

describe("Peliculas", () => {
  it("permite buscar películas aunque el texto esté en minúsculas", async () => {
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
    await userEvent.type(searchInput, "sexto");

    // Assert
    const pelicula = screen.getByText("El sexto sentido");
    expect(pelicula).toBeInTheDocument();
  });
});
