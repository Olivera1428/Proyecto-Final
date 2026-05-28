import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  crearProducto,
  actualizarProducto,
  obtenerProductoPorId,
} from "../services/Api";

import Swal from "sweetalert2";

const ProductoForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");

  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (id) {
      cargarProducto();
    }
  }, [id]);

  const cargarProducto = async () => {
    try {
      const producto = await obtenerProductoPorId(id);

      setNombre(producto.nombre);
      setDescripcion(producto.descripcion);
      setPrecio(producto.precio);
      setStock(producto.stock);
      setImagenUrl(producto.imagenUrl || "");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!descripcion.trim()) {
      nuevosErrores.descripcion = "La descripción es obligatoria";
    }

    if (!precio || precio <= 0) {
      nuevosErrores.precio = "Ingresa un precio válido";
    }

    if (stock === "" || stock < 0) {
      nuevosErrores.stock = "Ingresa un stock válido";
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    const nuevoProducto = {
      nombre,
      descripcion,
      precio,
      stock,
      estado: true,
      imagenUrl,
    };

    try {
      if (id) {
        await actualizarProducto(id, nuevoProducto);
      } else {
        await crearProducto(nuevoProducto);
      }

      await Swal.fire({
        title: "Éxito",
        text: id
          ? "Producto actualizado correctamente"
          : "Producto creado correctamente",
        icon: "success",
        confirmButtonColor: "#2563eb",
        background: "#1e293b",
        color: "#ffffff",
      });

      navigate("/");
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error",
        text: "Ocurrió un problema",
        icon: "error",
        confirmButtonColor: "#2563eb",
        background: "#1e293b",
        color: "#ffffff",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2">
      <h2
        className="
                    text-3xl
                    text-white
                    font-bold
                    mb-6
                "
      >
        {id ? "Editar Producto" : "Agregar Producto"}
      </h2>

      <div
        className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-4
                "
      >
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="
                            w-full
                            p-3
                            rounded-xl
                            bg-slate-700
                            text-white
                            outline-none
                        "
          />

          {errores.nombre && (
            <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="
                            w-full
                            p-3
                            rounded-xl
                            bg-slate-700
                            text-white
                            outline-none
                        "
          />

          {errores.descripcion && (
            <p className="text-red-500 text-sm mt-1">{errores.descripcion}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="
                            w-full
                            p-3
                            rounded-xl
                            bg-slate-700
                            text-white
                            outline-none
                        "
          />

          {errores.precio && (
            <p className="text-red-500 text-sm mt-1">{errores.precio}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="
                            w-full
                            p-3
                            rounded-xl
                            bg-slate-700
                            text-white
                            outline-none
                        "
          />

          {errores.stock && (
            <p className="text-red-500 text-sm mt-1">{errores.stock}</p>
          )}
        </div>

        <input
          type="text"
          placeholder="URL Imagen"
          value={imagenUrl}
          onChange={(e) => setImagenUrl(e.target.value)}
          className="
                        p-3
                        rounded-xl
                        bg-slate-700
                        text-white
                        md:col-span-2
                        outline-none
                    "
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="submit"
          className="
                        bg-transparent
                        border border-blue-500
                        text-blue-400
                        px-6 py-3
                        rounded-xl
                        transition-all duration-300
                        hover:bg-blue-600
                        hover:text-white
                    "
        >
          {id ? "Actualizar Producto" : "Guardar Nuevo Producto"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="
                        bg-transparent
                        border border-blue-500
                        text-blue-400
                        px-6 py-3
                        rounded-xl
                        transition-all duration-300
                        hover:bg-blue-600
                        hover:text-white
                    "
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ProductoForm;
