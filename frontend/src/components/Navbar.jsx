import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ cartItemCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-700/90 backdrop-blur-md shadow-lg"
          : "bg-blue-600 shadow-sm"
      } text-white`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* 🔹 Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide hover:text-gray-200 transition-colors duration-200"
        >
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
              className={`relative hover:text-gray-200 transition-colors duration-300 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
              after:bg-white hover:after:w-full after:transition-all 
              ${location.pathname === path ? "after:w-full" : ""}`}
            >
              {label}
            </Link>
          ))}

          {/* 🔹 Carrito */}
          <Link
            to="/cart"
            className="relative flex items-center hover:text-gray-200 transition"
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-white text-blue-600 rounded-full px-2 text-xs font-bold shadow-sm">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* 🔹 Menú móvil */}
      <div
        className={`md:hidden bg-blue-700/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3 py-3 text-base font-medium">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="hover:text-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/cart"
            className="hover:text-gray-200 transition"
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
