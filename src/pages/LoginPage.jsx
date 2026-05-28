import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuthStore from "../store/useAuthStore";

const LoginPage = () => {
  const navigate = useNavigate();

  const { loginAdmin } = useAuthStore();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const [errores, setErrores] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();

    let nuevosErrores = {};

    if (!usuario.trim()) {
      nuevosErrores.usuario = "Ingresa tu usuario";
    }

    if (!password.trim()) {
      nuevosErrores.password = "Ingresa tu contraseña";
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    if (usuario === "admin" && password === "123456") {
      loginAdmin();

      navigate("/");
    } else {
      Swal.fire({
        title: "Error",
        text: "Credenciales incorrectas",
        icon: "error",
        confirmButtonColor: "#dc2626",
        background: "#1e293b",
        color: "#ffffff",
      });
    }
  };

  return (
    <div
      className="
                min-h-screen
                bg-[#0f172a]
                flex
                justify-center
                items-center
                px-4
            "
    >
      <form
        onSubmit={handleLogin}
        className="
                    bg-[#1e293b]
                    p-8
                    rounded-2xl
                    shadow-xl
                    w-full
                    max-w-md
                "
      >
        <h1
          className="
                        text-3xl
                        text-white
                        font-bold
                        mb-6
                        text-center
                    "
        >
          Iniciar Sesión
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => {
                setUsuario(e.target.value);

                setErrores({
                  ...errores,
                  usuario: "",
                });
              }}
              className="
                                w-full
                                p-3
                                rounded-xl
                                bg-slate-700
                                text-white
                                outline-none
                            "
            />

            {errores.usuario && (
              <p className="text-red-400 text-sm mt-1">{errores.usuario}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);

                setErrores({
                  ...errores,
                  password: "",
                });
              }}
              className="
                                w-full
                                p-3
                                rounded-xl
                                bg-slate-700
                                text-white
                                outline-none
                            "
            />

            {errores.password && (
              <p className="text-red-400 text-sm mt-1">{errores.password}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="
                        w-full
                        mt-6
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        py-3
                        rounded-xl
                        transition
                    "
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
