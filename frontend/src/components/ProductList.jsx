import React from "react";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useCart();

  // ⭐ CATEGORÍAS (puedes reemplazar imágenes luego)
  const categorias = [
    {
      id: 1,
      name: "Tecnología",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      name: "Oficina",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      name: "Accesorios",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  // ⭐ PRODUCTOS (9 productos de ejemplo)
  const productos = [
    { id: 4, name: "Monitor Full HD 24''", price: 95000 },
    { id: 5, name: "Silla Ergonómica Pro", price: 120000 },
    { id: 6, name: "Webcam HD 1080p", price: 45000 },
    { id: 7, name: "Audífonos Inalámbricos", price: 35000 },
    { id: 8, name: "Teclado Mecánico RGB", price: 78000 },
    { id: 9, name: "Mouse Gamer 7200 DPI", price: 22000 },
    { id: 10, name: "Lámpara LED Escritorio", price: 18000 },
    { id: 11, name: "Alfombrilla XL", price: 15000 },
    { id: 12, name: "Soporte para Notebook", price: 30000 },
  ];

  return (
    <div className="container-max py-12 px-6">
      {/* TÍTULO */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Todos los Productos
      </h2>

      {/* ⭐ CATEGORÍAS */}
      <h3 className="text-2xl font-bold mb-6">Categorías</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
        {categorias.map((c) => (
          <div
            key={c.id}
            className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer hover:-translate-y-1"
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold">{c.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* ⭐ LISTA DE PRODUCTOS */}
      <h3 className="text-2xl font-bold mb-6">Productos Disponibles</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {productos.map((p) => (
          <div
            key={p.id}
            className="card p-6 shadow hover:shadow-xl transition rounded-2xl"
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt={p.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
            <p className="muted mb-4">${p.price.toLocaleString()}</p>

            <button
              onClick={() => addToCart(p)}
              className="btn-primary w-full py-2 rounded-full"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
