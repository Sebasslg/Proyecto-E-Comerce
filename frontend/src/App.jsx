import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import * as api from "./services/api";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Cargar el carrito inicial desde el backend
    const fetchCart = async () => {
      try {
        const response = await api.getCart();
        setCartItems(response.data);
      } catch (error) {
        console.error("Error al cargar el carrito:", error);
      }
    };
    fetchCart();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      const response = await api.addToCart(product);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await api.removeFromCart(productId);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
    }
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <Navbar cartItemCount={getCartItemCount()} />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductList addToCart={handleAddToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={handleRemoveFromCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
