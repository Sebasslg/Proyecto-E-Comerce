import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems = [], removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="container-max px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-center">🛒 Tu Carrito</h1>

      {cartItems.length === 0 ? (
        <p className="muted text-center text-lg">El carrito está vacío.</p>
      ) : (
        <div className="w-full max-w-4xl">
          {/* Encabezado (solo en desktop) */}
          <div className="hidden md:flex justify-between items-center border-b pb-3 font-semibold text-gray-600 text-center">
            <div className="w-2/5">Producto</div>
            <div className="w-1/5">Cantidad</div>
            <div className="w-1/5">Subtotal</div>
            <div className="w-1/5">Acción</div>
          </div>

          {/* Items */}
          {cartItems.map((item) => (
            <div key={item.product.id} className="border-b py-6">
              <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* Nombre */}
                <div className="w-full md:w-2/5 mb-4 md:mb-0">
                  <h2 className="text-xl font-semibold">{item.product.name}</h2>
                  <p className="muted">Precio: ${item.product.price.toFixed(2)}</p>
                </div>

                {/* Cantidad */}
                <div className="w-full md:w-1/5 flex justify-center items-center space-x-2 mb-4 md:mb-0">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, Math.max((item.quantity || 1) - 1, 1))
                    }
                    className="px-3 py-1 border rounded text-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-lg font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, (item.quantity || 0) + 1)
                    }
                    className="px-3 py-1 border rounded text-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <p className="w-full md:w-1/5 text-lg font-bold mb-4 md:mb-0">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>

                {/* Eliminar */}
                <div className="w-full md:w-1/5">
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:underline"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total + botón */}
          <div className="mt-10 text-center flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold">
              Total: <span className="text-blue-600">${total.toFixed(2)}</span>
            </h2>

            <button className="btn-primary rounded-full px-10 py-3 text-lg shadow-md">
              Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
