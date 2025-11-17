import React from "react";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useCart();

  const productos = [
    { id: 4, name: "Monitor Full HD", price: 95000 },
    { id: 5, name: "Silla ergonómica", price: 120000 },
    { id: 6, name: "Webcam HD", price: 45000 },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Todos los Productos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productos.map((p) => (
          <div key={p.id} className="card hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {p.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ${p.price.toLocaleString()}
            </p>

            {/* 🔹 Botón con prueba */}
            <button
              onClick={() => {
                console.log("🖱️ Click detectado en:", p.name);
                addToCart(p);
                console.log("✅ Producto enviado al carrito:", p);
              }}
              className="btn-primary w-full"
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
