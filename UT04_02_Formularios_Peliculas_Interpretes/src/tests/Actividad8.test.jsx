import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Peliculas from "../pages/Peliculas";

describe("Peliculas — Navegación al detalle", () => {
  it("navega al detalle de la película al hacer clic", async () => {
    render(
      <MemoryRouter>
        <Peliculas />
      </MemoryRouter>
    );

    const peliculaLink = screen.getByText("El sexto sentido");

    // Act: simulamos clic en la película
    await userEvent.click(peliculaLink);

    // Assert: comprobamos que el href del Link es correcto
    expect(peliculaLink.closest("a")).toHaveAttribute("href", "/detalle/pelicula/1");
  });
});
