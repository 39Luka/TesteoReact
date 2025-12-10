import { Routes, Route, Navigate } from "react-router-dom";

import Contenedor from "./Contenedor";

import Home from "../pages/Home";
import Admin from "../pages/Admin";
import FormularioEstadoCampo from "../pages/FormularioEstadoCampo";
import FormularioEstadoAgrupado from "../pages/FormularioEstadoAgrupado";
import ValidacionEnEnvio from "../pages/ValidacionEnEnvio";
import ValidacionDoble from "../pages/ValidacionDoble";
import FormularioNoControlado from "../pages/FormularioNoControlado";
import UseRefPersistente from "../pages/UseRefPersistente";

function AppRouter() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/estadocampo" element={<FormularioEstadoCampo />} />
        <Route path="/estadoagrupado" element={<FormularioEstadoAgrupado />} />
        <Route path="/validacionenenvio" element={<ValidacionEnEnvio />} />
        <Route path="/validaciondoble" element={<ValidacionDoble />} />
        <Route path="/nocontrolado" element={<FormularioNoControlado />} />
        <Route path="/userefpersis" element={<UseRefPersistente />} />
        <Route path="/admin" element={<Admin />} />
      </Route>

      {/* Página 404 */}
      <Route
        path="*"
        element={
          <Contenedor titulo="Página no encontrada">
            <p>La ruta no existe.</p>
          </Contenedor>
        }
      />
    </Routes>
  );
}
export default AppRouter;