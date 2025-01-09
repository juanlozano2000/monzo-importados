import React, { useContext, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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

                <Link to={`/`}>
                    <button className=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                        Ir a productos
                    </button>
                </Link>
            </div>
        );
    }

    useEffect(() => {
        // Llevar el scroll al inicio cuando se monta el componente
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-6 text-center">🛒 Mi Pedido</h1>
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
                                className="text-red-500 hover:text-red-700 ml-2"
                            >
                                <FontAwesomeIcon icon={faTrash} className='size-7' />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center items-center mt-6 flex-col p-4">
                <h2 className="text-xl font-bold mb-4">
                    Total: ${totalPrice.toLocaleString('es-AR')}
                </h2>
                <button
                    onClick={clearCart}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 mb-4"
                >
                    Vaciar Carrito
                </button>
                <button
                    onClick={() => {
                        const phoneNumber = "5491138756897";
                        const orderDetails = cart
                            .map(item => `${item.quantity} x ${item.name} (${item.size}) - $${item.price.toLocaleString('es-AR')}`)
                            .join("\n");
                        const total = totalPrice.toLocaleString('es-AR');
                        const message = `¡Hola Monzo! Quiero proceder al pago de mi pedido:\n\n${orderDetails}\n\nTotal: $${total}`;
                        const encodedMessage = encodeURIComponent(message);
                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                        window.open(whatsappURL, "_blank");
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                    Proceder al Pago
                </button>
            </div>

        </div>
    );
};

export default Cart;
