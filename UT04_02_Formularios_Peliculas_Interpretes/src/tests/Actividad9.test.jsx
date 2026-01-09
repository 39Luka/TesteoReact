import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail";
import peliculas from "../data/peliculas";

describe("Detail", () => {
  it('muestra la película "El silencio de los corderos" para /detalle/pelicula/4', () => {
    // Arrange: renderizamos Detail con MemoryRouter y la ruta correcta
    render(
        //Esto pone una ruta para testear
      <MemoryRouter initialEntries={["/detalle/pelicula/4"]}> 
        <Routes>
          <Route path="/detalle/pelicula/:idPeli" element={<Detail />} />
        </Routes>
      </MemoryRouter>
    );

    // Act: buscamos el nombre de la película que debería aparecer
    const pelicula = peliculas.find(p => p.id === 4);

    // Assert: verificamos que el nombre de la película aparece en el documento
    expect(screen.getByText(pelicula.nombre)).toBeInTheDocument();
  });
});
