import { describe, test, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../components/List";

describe("Actividad 2 — Texto Dinámico y Accesibilidad", () => {
  test("muestra correctamente el contenido pasado por children", () => {
    // Arrange
    render(
      //Renderiza el componente de prueba
      <List
        foto="actor.jpg"
        nombre="Scarlett Johansson"
        esNota10={false}
      >
        Actriz principal en película de acción
      </List>
    );

    // Act
    //Busca un article que tenga el arial label de scarlett johansson
    const article = screen.getByRole("article", { name: /scarlett johansson/i });
    // Buscar específicamente el p dentro del article
    const paragraph = within(article).getByText(/actriz principal en película de acción/i, {
      selector: "p",
    });

    // Assert
    //Espera que se haya encontrado
    expect(paragraph).toBeInTheDocument();
  });

  test("la imagen tiene el atributo alt correcto basado en el nombre", () => {
    // Arrange
    // Renderiza el componente
    render(
      <List
        foto="scarlett.jpg"
        nombre="Scarlett Johansson"
        esNota10={false}
      >
        Actriz principal
      </List>
    );

    // Act
    // Busca los elementos con alt foto de scarlett johansson
    const img = screen.getByAltText(/foto de scarlett johansson/i);

    // Assert
    //Espera que se haya encontrado una imagen con ese alt
    expect(img).toBeInTheDocument();
  });
});
