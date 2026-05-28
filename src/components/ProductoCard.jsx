import { eliminarProducto } from "../services/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthStore from "../store/useAuthStore";

const ProductoCard = ({ producto }) => {
  const navigate = useNavigate();

  const esAdmin = useAuthStore((state) => state.esAdmin);
  const handleEliminar = async () => {
    const result = await Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      background: "#1e293b",
      color: "#ffffff",
    });

    if (!result.isConfirmed) return;

    try {
      await eliminarProducto(producto.id);

      await Swal.fire({
        title: "Eliminado",
        text: "Producto eliminado correctamente",
        icon: "success",
        confirmButtonColor: "#2563eb",
        background: "#1e293b",
        color: "#ffffff",
      });

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleComprar = async () => {
    await Swal.fire({
      title: "Producto agregado",
      text: "Se agregó al carrito correctamente",
      icon: "success",
      confirmButtonColor: "#2563eb",
      background: "#1e293b",
      color: "#ffffff",
    });
  };

  return (
    <div
      className="
                bg-[#1e293b]
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
            "
    >
      {producto.imagenUrl ? (
        <img
          src={producto.imagenUrl}
          alt={producto.nombre}
          className="w-full h-56 object-cover"
        />
      ) : (
        <div
          className="
                            w-full
                            h-56
                            flex
                            items-center
                            justify-center
                            bg-slate-800
                            text-white
                            text-2xl
                            font-bold
                            text-center
                            px-4
                        "
        >
          {producto.nombre}
        </div>
      )}

      <div className="p-5">
        <h2 className="text-2xl font-bold text-white mb-2">
          {producto.nombre}
        </h2>

        <p className="text-gray-300 h-14">{producto.descripcion}</p>

        <div className="mt-5 flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-400">
            S/ {producto.precio}
          </span>

          <span
            className="
                            bg-blue-600
                            text-white
                            px-3
                            py-1
                            rounded-full
                            text-sm
                        "
          >
            Stock: {producto.stock}
          </span>
        </div>

        {esAdmin ? (
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => navigate(`/productos/editar/${producto.id}`)}
              className="
                                    bg-transparent
                                    border border-blue-500
                                    text-blue-400
                                    px-4 py-2
                                    rounded-xl
                                    transition-all duration-300
                                    hover:bg-blue-600
                                    hover:text-white
                                "
            >
              Editar
            </button>

            <button
              onClick={handleEliminar}
              className="
                                    bg-transparent
                                    border border-blue-500
                                    text-blue-400
                                    px-4 py-2
                                    rounded-xl
                                    transition-all duration-300
                                    hover:bg-blue-600
                                    hover:text-white
                                "
            >
              Eliminar
            </button>
          </div>
        ) : (
          <button
            onClick={handleComprar}
            className="
                                mt-6
                                w-full
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                py-3
                                rounded-xl
                                transition-all duration-300
                            "
          >
            Comprar
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductoCard;
