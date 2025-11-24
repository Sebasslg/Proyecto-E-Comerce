import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

/*
  Archivo: frontend/src/App.jsx
  Propósito: Punto de montaje de la app React. Aquí se incluyen:
  - Rutas principales (añade nuevas rutas en el componente `Routes`).

  Para extender:
  - Añadir protected routes: crea un componente `PrivateRoute` y úsalo
    envolviendo las rutas que requieran autenticación.
  - Extra providers: envuelve `<Router>` con otros providers si los necesitas.
*/

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
