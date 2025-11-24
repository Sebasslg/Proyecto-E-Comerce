import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useCart();

  const productosDestacados = [
    { id: 1, name: "Auriculares Bluetooth", price: 25000, image: "https://via.placeholder.com/600x450" },
    { id: 2, name: "Mouse Gamer RGB", price: 18000, image: "https://via.placeholder.com/600x450" },
    { id: 3, name: "Teclado Mecánico", price: 40000, image: "https://via.placeholder.com/600x450" },
  ];

  const categorias = [
    { id: 1, name: "Tecnología", image: "https://via.placeholder.com/400x300" },
    { id: 2, name: "Accesorios", image: "https://via.placeholder.com/400x300" },
    { id: 3, name: "Ofertas", image: "https://via.placeholder.com/400x300" },
  ];

  return (
    <section className="pt-24 pb-20">
      
      {/* hero  */}
      <div className="container-max mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <div className="space-y-5">
            <h1 className="text-5xl font-extrabold leading-tight">  
              Bienvenido a <span className="text-blue-600">MiTienda</span>
            </h1>

            <p className="text-lg muted max-w-md">
              Encuentra productos increíbles, precios justos y envíos rápidos. Una experiencia pensada para ti.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary rounded-full px-8 py-3">
                🛒 Ver Productos
              </Link>

              <Link to="/about" className="btn-secondary rounded-full px-8 py-3">
                Saber más
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="w-full">
            <img
              src="https://via.placeholder.com/900x650"
              alt="Hero principal"
              className="rounded-3xl shadow-xl w-full h-[380px] md:h-[450px] object-cover"
            />
          </div>
        </div>
      </div>

      {/*  Banner  de Promociones */}
      <div className="container-max mb-24">
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src="   " 
            alt="Banner"
            className="w-full h-[260px] object-cover"
          />
          <div className="absolute inset-0 bg-black/45 backdrop-blur-sm flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-3xl font-bold mb-2">Ofertas</h2>
            <p className="opacity-90 mb-4 text-lg">Tecnología para todos</p>
            <Link to="/products" className="btn-primary px-6 py-2 rounded-full"> 
              Ver ofertas 
            </Link>
          </div>
        </div>
      </div>

      {/* ⭐ Categorías */}
      <div className="container-max mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Categorías</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {categorias.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl overflow-hidden shadow hover:shadow-lg cursor-pointer transition duration-200 hover:-translate-y-1"
            >
              <img src={c.image} alt={c.name} className="w-full h-48 object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">{c.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ⭐ Productos destacados */}
      <div className="container-max mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {productosDestacados.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl shadow hover:shadow-xl overflow-hidden transition duration-200 hover:-translate-y-1"
            >
              <img src={p.image} alt={p.name} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
                <p className="muted mb-4">${p.price.toLocaleString()}</p>
                <button onClick={() => addToCart(p)} className="btn-primary w-full py-2 rounded-full">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  CTA Final */}
      <div className="container-max">
        <div className="card rounded-3xl text-center p-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="muted mb-6 max-w-md mx-auto">
            Explora nuestra tienda y encuentra exactamente lo que buscas.
          </p>
          <Link to="/products" className="btn-primary rounded-full px-10 py-3">
            Ver productos
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Home;
