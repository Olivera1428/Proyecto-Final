import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/Api";

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const data = await obtenerProductos();

      setProductos(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    productos,
    loading,
    error,
    recargar: cargarProductos,
  };
};

export default useProductos;
