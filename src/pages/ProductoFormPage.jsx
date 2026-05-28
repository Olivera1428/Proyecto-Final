import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductoForm from "../components/ProductoForm";

const ProductoFormPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Gestionar Producto</h1>
        </div>

        <ProductoForm />
      </div>
    </div>
  );
};

export default ProductoFormPage;
