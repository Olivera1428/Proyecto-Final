import { useState } from "react";

import ProductoCard from "../components/ProductoCard";
import Navbar from "../components/Navbar";
import useProductos from "../hooks/useProductos";

function ProductosPage() {
  const [busqueda, setBusqueda] = useState("");

  const { productos, loading, error } = useProductos();

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (loading) {
    return (
      <div
        className="
                    min-h-screen
                    bg-[#0f172a]
                    flex
                    flex-col
                    justify-center
                    items-center
                "
      >
        <div
          className="
                        w-16
                        h-16
                        border-4
                        border-blue-500
                        border-t-transparent
                        rounded-full
                        animate-spin
                    "
        ></div>

        <h1 className="text-white text-2xl mt-6">Cargando productos...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-500 text-3xl p-10">Error al cargar productos</h1>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-white mb-10">
          Productos Tecnológicos
        </h1>

        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="
                        w-full
                        md:w-96
                        mb-8
                        p-3
                        rounded-xl
                        bg-slate-700
                        text-white
                        outline-none
                    "
        />

        {productosFiltrados.length === 0 ? (
          <h2 className="text-gray-400 text-xl">No se encontraron productos</h2>
        ) : (
          <div
            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-3
                                gap-8
                            "
          >
            {productosFiltrados.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductosPage;
