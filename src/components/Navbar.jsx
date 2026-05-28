import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuthStore from "../store/useAuthStore";

const Navbar = () => {
  const navigate = useNavigate();

  const { esAdmin, logout } = useAuthStore();

  const handleLogout = async () => {
    await Swal.fire({
      title: "Cerrando sesión...",
      timer: 1200,
      showConfirmButton: false,
      background: "#1e293b",
      color: "#ffffff",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    logout();

    navigate("/");
  };

  return (
    <nav className="bg-[#111827] border-b border-slate-700">
      <div
        className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-4
                    flex
                    justify-between
                    items-center
                "
      >
        <h1
          className="
                        text-2xl
                        font-bold
                        text-blue-400
                        cursor-pointer
                    "
          onClick={() => navigate("/")}
        >
          TechStore
        </h1>

        <div className="flex gap-4">
          {esAdmin && (
            <button
              onClick={() => navigate("/productos/crear")}
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
              Agregar Producto
            </button>
          )}

          {esAdmin ? (
            <button
              onClick={handleLogout}
              className="
                                    bg-transparent
                                    border border-red-500
                                    text-red-400
                                    px-4 py-2
                                    rounded-xl
                                    transition-all duration-300
                                    hover:bg-red-600
                                    hover:text-white
                                "
            >
              Cerrar Sesión
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
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
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
