import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const Cart = () => {
    //extrair las funcionalidades del contexto
    const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    //Carrito vacio
    if (cart.length === 0) {
        return (
            <div className="text-center py-10">
                <h2 className="text-2xl font-bold">Tu carrito está vacío 🛒</h2>
                <p>¡Agrega algunos productos para empezar!</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-6">🛒 Carrito de Compras</h1>
            <ul>
                {cart.map((item) => (
                    // Item del carrito
                    <li key={item.id} className="flex justify-between items-center border-b py-4">
                        <div className="flex items-center gap-4">
                            <img src={item.img} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                            <div>
                                <h3 className="text-lg font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-1 bg-gray-200 rounded"
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 bg-gray-200 rounded"
                            >
                                +
                            </button>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center mt-6">
                <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
                <div>
                    <button
                        onClick={clearCart}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                    >
                        Vaciar Carrito
                    </button>
                    <button
                        onClick={() => alert('¡Gracias por tu compra!')}
                        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                    >
                        Proceder al Pago
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
