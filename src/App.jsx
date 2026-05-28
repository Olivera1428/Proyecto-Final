import { Routes, Route } from "react-router-dom";

import ProductosPage from "./pages/ProductosPage";
import ProductoFormPage from "./pages/ProductoFormPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductosPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/productos/crear" element={<ProductoFormPage />} />

      <Route path="/productos/editar/:id" element={<ProductoFormPage />} />
    </Routes>
  );
}

export default App;
