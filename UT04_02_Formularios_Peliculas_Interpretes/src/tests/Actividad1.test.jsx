import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../components/List";

describe("Actividad 1 — Componente List", () => {
  test("muestra el nombre recibido por props", () => {
    // 🧩 Arrange
    render( //Renderiza el componente para probarlo
      <List
        foto="actor.jpg"
        nombre="Leonardo DiCaprio"
        esNota10={false}
      >
        Actor principal
      </List>
    );

    // 🔍 Act
    //Busca un heading que tenga el aria label leonardo dicaprio
    const heading = screen.getByRole("heading", {
      name: /leonardo dicaprio/i,
    });

    // ✅ Assert
    expect(heading).toBeInTheDocument(); //Espera que se haya encontrado un heading en el documento
  });

  test("si la película tiene nota 10, el título aparece en rojo", () => {
    // 🧩 Arrange
    render( //Renderiza el componente de prueba
      <List
        foto="actor.jpg"
        nombre="Leonardo DiCaprio"
        esNota10={true}
      >
        Actor principal
      </List>
    );

    // 🔍 Act
    const heading = screen.getByRole("heading", {
      name: /leonardo dicaprio/i, //Busca el heading con arial label de leonardo dicaprio
    });

    // ✅ Assert
    expect(heading).toHaveClass("text-red-600"); //Espera que el heading tenga la clase text-red-600
  });
});
