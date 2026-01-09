import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioPeliculaControlado from "../components/FormularioPeliculaControlado";


describe("FormularioPeliculaControlado", () => {
    it('muestra error "El nombre es obligatorio" si el campo nombre está vacío', async () => {
        // Arrange: renderizamos el componente
        render(<FormularioPeliculaControlado />);

        // Act: simulamos el envío del formulario sin rellenar nada
        const submitButton = screen.getByRole("button", { name: /Añadir Película/i });
        await userEvent.click(submitButton);//await espera hasta que se haga

        // Assert: verificamos que aparece el mensaje de error
        const errorMessage = screen.getByText("El nombre es obligatorio.");
        expect(errorMessage).toBeInTheDocument();
    });
});
