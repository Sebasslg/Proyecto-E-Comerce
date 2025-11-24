# Tienda — Plantilla e-commerce (Full Stack)

Repositorio de ejemplo con un backend en Node/Express + Sequelize (MySQL) y un frontend en React (Vite + Tailwind).

## Requisitos

- Node.js (v16+ recomendado)
- npm
- MySQL local o accesible

## Estructura principal

- `/backend` — servidor Express, Sequelize, modelos y rutas
- `/frontend` — aplicación React con Vite y Tailwind

## Variables de entorno

Copia `backend/.env` y actualiza con tus credenciales:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=tu_clave
DB_NAME=mi_tienda
PORT=5000
```

## Inicializar base de datos

1. Inicia MySQL y crea la base de datos:

```powershell
mysql -u root -p -e "CREATE DATABASE mi_tienda;"
```

2. (Opcional) Si no usas `root`, ajusta `DB_USER`/`DB_PASS` en `backend/.env`.

## Instalar dependencias

Abre dos terminales (uno para backend y otro para frontend):

Backend:
```powershell
cd c:\Users\sebal\Desktop\Tienda\backend
npm install
```

Frontend:
```powershell
cd c:\Users\sebal\Desktop\Tienda\frontend
npm install
```

> Si PowerShell bloquea ejecución de scripts, ejecuta (temporalmente) antes de `npm install`:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## Ejecutar en desarrollo

1. Inicia el backend (sincroniza modelos y arranca servidor):

```powershell
cd c:\Users\sebal\Desktop\Tienda\backend
npm run dev
```

El backend escucha en `http://localhost:5000`.

2. Inicia el frontend:

```powershell
cd c:\Users\sebal\Desktop\Tienda\frontend
npm run dev
```

Vite levantará el frontend en `http://localhost:5174` (o un puerto cercano). El frontend está configurado con un proxy de desarrollo (`/api` → `http://localhost:5000`) para evitar problemas de CORS y red.

## Probar la aplicación

- Abre el frontend en el navegador (`http://localhost:5174/`).
- Ve a la pestaña **Productos** y usa **Agregar al carrito**. El carrito se sincroniza con el backend.
- Abre la pestaña **Carrito** para ver items, cantidades y total.

## Notas y solución de problemas

- Si ves `Access denied` al conectar con MySQL: revisa `backend/.env` y credenciales.
- Si ves `Unknown database 'mi_tienda'`: crea la DB como se indica arriba.
- Si el frontend no comunica con el backend cuando usas una IP de red, usa `localhost` en la URL del navegador o asegúrate de que el firewall no bloquee el puerto 5000.
- El proyecto incluye una configuración de proxy en `frontend/vite.config.js` que redirige `/api` hacia `http://localhost:5000` durante el desarrollo.

## Endpoints principales

- `GET /api/products` — listar productos
- `GET /api/products/:id` — obtener producto por id
- `POST /api/products` — crear producto
- `PUT /api/products/:id` — actualizar producto
- `DELETE /api/products/:id` — eliminar producto

- `GET /api/cart` — obtener carrito
- `POST /api/cart/add` — agregar producto al carrito (envía objeto `product` completo)
- `DELETE /api/cart/remove/:id` — eliminar producto del carrito por id

## Dónde modificar el código (guía rápida)

- Backend:
	- `backend/server.js`: punto de entrada; añade middlewares, nuevas rutas y cambia el puerto.
	- `backend/config/db.js`: credenciales y opciones de Sequelize.
	- `backend/models/Product.js`: campos del modelo `Product` (añadir SKU, categoría, etc.).
	- `backend/controllers/productController.js`: lógica de CRUD y validaciones.
	- `backend/controllers/cartController.js`: lógica del carrito (actualmente en memoria). Persistir aquí cambia comportamiento.
	- `backend/routes/*.js`: definir y proteger endpoints (añadir auth middleware).

- Frontend:
	- `frontend/src/services/api.js`: baseURL y helpers para llamadas API; agrega headers de auth aquí.
	- `frontend/src/context/CartContext.jsx`: lógica central del carrito en el cliente; añade persistencia/localStorage o manejo offline aquí.
	- `frontend/src/components/ProductList.jsx`: listados de producto (reemplazar datos de ejemplo por API).
	- `frontend/src/components/Cart.jsx`: vista del carrito y controles de cantidad.
	- `frontend/src/components/Navbar.jsx`: enlaces y visual del navbar.
	- `frontend/src/index.css`: utilidades y componentes Tailwind personalizados.

Si quieres, puedo añadir ejemplos concretos de cómo persistir el carrito en MySQL o Redis, o preparar migraciones de Sequelize.

## Siguientes pasos (opcional)

- Persistir carrito en DB en lugar de memoria (crear modelo `Cart`/`CartItem`).
- Añadir autenticación y endpoints por usuario.
- Preparar scripts de despliegue / Docker.
