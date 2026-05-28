# TechStore CRUD - React + API REST (PROYECTO FINAL)

## Descripción del Proyecto

TechStore es una aplicación CRUD desarrollada con React que permite gestionar productos tecnológicos mediante operaciones de:

- Crear productos
- Listar productos
- Editar productos
- Eliminar productos

El proyecto consume una API REST propia desarrollada en backend y desplegada en Render.

---

# Tecnologías Utilizadas

## Frontend
- React
- React Router DOM
- Axios
- TailwindCSS
- SweetAlert2
- Zustand

## Backend
- API REST desplegada en Render

---

# Funcionalidades Implementadas

## Read (Listar)
- Visualización de productos en tarjetas.
- Estado de carga.
- Manejo de errores.
- Buscador dinámico de productos.

---

## create (Crear)
- Formulario controlado con React.
- Validaciones de campos.
- Registro de nuevos productos en la API.

---

## Update (Editar)
- Reutilización del mismo formulario para edición.
- Obtención de producto por ID.
- Actualización mediante petición PUT.

---

## Delete (Eliminar)
- Eliminación de productos.
- Confirmación con SweetAlert2.

---

# Sistema de Login

Se implementó un sistema básico de autenticación para administrador utilizando:

- Zustand
- LocalStorage

## Funciones:
- Iniciar sesión
- Cerrar sesión
- Protección visual de botones CRUD

### Cuando el usuario no es administrador:
- Solo puede visualizar productos.

### Cuando el usuario inicia sesión:
- Puede crear
- Editar
- Eliminar productos

---

# Diseño UI

La interfaz fue desarrollada con TailwindCSS utilizando:

- Diseño responsive
- Cards modernas
- Animaciones hover
- Inputs personalizados
- Loader animado
- Alertas personalizadas

---

# Estructura del Proyecto

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductoCard.jsx
│   └── ProductoForm.jsx
│
├── hooks/
│   └── useProductos.jsx
│
├── pages/
│   ├── ProductosPage.jsx
│   ├── ProductoFormPage.jsx
│   └── LoginPage.jsx
│
├── services/
│   └── api.js
│
├── store/
│   └── useAuthStore.js
│
├── App.jsx
└── main.jsx
API REST

La aplicación consume una API desplegada en Render mediante Axios.

Operaciones utilizadas:
GET
GET BY ID
POST
PUT
DELETE
Instalación del Proyecto
1 Clonar repositorio
git clone URL_DEL_REPOSITORIO
2 Instalar dependencias
npm install
3 Configurar variables de entorno

Crear archivo:

.env

Agregar:

VITE_API_BASE_URL=URL_DE_LA_API
Ejecutar proyecto
npm run dev
Deploy
Frontend desplegado en:
Vercel
Backend desplegado en:
Render
Autor

Proyecto desarrollado por:

Paulocésar Donovan Olivera Bautista
