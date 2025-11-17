import React from "react";

// Recibimos las 3 props necesarias desde App.jsx
const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  
  // Calcula el total basado en el precio del producto y la cantidad
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
      
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {/* Encabezados de la tabla */}
          <div className="hidden md:flex justify-between items-center border-b pb-2 font-semibold text-gray-600">
            <div className="w-2/5">Producto</div>
            <div className="w-1/5 text-center">Cantidad</div>
            <div className="w-1/5 text-right">Subtotal</div>
            <div className="w-1/5 text-right">Acción</div>
          </div>

          {/* Lista de productos en el carrito */}
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col md:flex-row justify-between items-center border-b py-4"
            >
              {/* 1. Información del Producto */}
              <div className="w-full md:w-2/5 mb-2 md:mb-0">
                <h2 className="text-xl">{item.product.name}</h2>
                <p className="text-gray-600">
                  Precio: ${item.product.price.toFixed(2)}
                </p>
              </div>

              {/* 2. Control de Cantidad (Añadido) */}
              <div className="w-full md:w-1/5 flex justify-center items-center space-x-2 mb-2 md:mb-0">
                <button
                  // Llama a la función 'updateQuantity' con -1
                  onClick={() => updateQuantity(item.product.id, -1)}
                  // Se deshabilita si la cantidad es 1 para evitar cantidades negativas
                  disabled={item.quantity <= 1}
                  className="px-3 py-1 border rounded text-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span className="w-10 text-center text-lg">{item.quantity}</span>
                <button
                  // Llama a la función 'updateQuantity' con +1
                  onClick={() => updateQuantity(item.product.id, 1)}
                  className="px-3 py-1 border rounded text-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              {/* 3. Subtotal del Item */}
              <p className="w-full md:w-1/5 text-right font-bold text-lg mb-2 md:mb-0">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
              
              {/* 4. Botón de Eliminar */}
              <div className="w-full md:w-1/5 text-right">
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                >
                  Eliminar
                </button>
              </div>

            </div>
          ))}

          {/* Total General y Botón de Pago */}
          <div className="mt-8 text-right flex flex-col items-end space-y-4">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition duration-300">
              🛒 Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;