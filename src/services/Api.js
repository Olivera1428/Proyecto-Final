import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
});

export async function obtenerProductos() {
  const response = await api.get("/productos");

  return response.data;
}

export async function obtenerProductoPorId(id) {
  const response = await api.get(`/productos/${id}`);

  return response.data;
}

export async function crearProducto(producto) {
  const response = await api.post("/productos", producto);

  return response.data;
}

export async function actualizarProducto(id, producto) {
  const response = await api.put(`/productos/${id}`, producto);

  return response.data;
}

export async function eliminarProducto(id) {
  const response = await api.delete(`/productos/${id}`);

  return response.data;
}
