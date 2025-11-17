import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useCart();

  const productosDestacados = [
    { id: 1, name: "Auriculares Bluetooth", price: 25000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Mouse Gamer RGB", price: 18000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Teclado Mecánico", price: 40000, image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 pt-24 pb-12">
      <div className="text-center px-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
          Bienvenido a{" "}
          <span className="text-blue-600 dark:text-blue-400">MiTienda</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Tu lugar para encontrar todo lo que necesitas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md">
            🛒 Ver Productos
          </Link>
          <Link to="/about" className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-full shadow-md">
            Saber más
          </Link>
        </div>
      </div>

      {/* Productos destacados */}
      <div className="mt-20 max-w-6xl px-6 w-full">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Productos Destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productosDestacados.map((p) => (
            <div key={p.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <img src={p.image} alt={p.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{p.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">${p.price.toLocaleString()}</p>
                <button
                  onClick={() => addToCart(p)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
