import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

/*
  Archivo: frontend/src/components/Navbar.jsx
  Propósito: Barra de navegación responsive.

  Personalización rápida:
  - Para cambiar links edita el array `navLinks` en este archivo.
  - Para ajustar estilos globales (colores, sombras) edita `src/index.css`.
  - Si quieres mostrar el total del carrito en vez del conteo, usa `useCart()`
    y calcula el total con `cartItems.reduce(...)`.
*/

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { getItemCount } = useCart();
  const cartItemCount = getItemCount ? getItemCount() : 0;

  // 🔹 Cierra el menú móvil al cambiar de ruta
  useEffect(() => setMenuOpen(false), [location]);

  // 🔹 Cambia el fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Enlaces de navegación
  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/products", label: "Productos" },
    { path: "/about", label: "Nosotros" },
    { path: "/contact", label: "Contacto" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 navbar ${scrolled ? 'navbar--glass shadow-lg' : 'shadow-sm'} text-white`}>
      <div className="container-max px-4 py-3 flex justify-between items-center">
        {/* 🔹 Logo */}
        <Link to="/" className="brand text-2xl font-extrabold tracking-wide transition-colors duration-200">
          MiTienda
        </Link>

        {/* 🔹 Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* 🔹 Enlaces en escritorio */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`link relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all ${location.pathname === path ? "after:w-full" : ""}`}
            >
              {label}
            </Link>
          ))}

          {/* 🔹 Carrito */}
          <Link
            to="/cart"
            className="link relative flex items-center transition"
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 cart-badge">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* 🔹 Menú móvil */}
      <div className={`md:hidden navbar transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className="flex flex-col items-center gap-3 py-3 text-base font-medium">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="link transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/cart"
            className="link transition"
            onClick={() => setMenuOpen(false)}
          >
            🛒 Carrito {cartItemCount > 0 && `(${cartItemCount})`}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
