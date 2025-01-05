import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    if (totalItems === 0) {
        return null; // No mostrar si no hay items
    }

    return (
        <Link to="/cart" className="fixed bottom-4 left-4 z-50">
            <div className="relative w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300">
                <FontAwesomeIcon icon={faShoppingCart} className="text-white text-2xl" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                    {totalItems}
                </span>
            </div>
        </Link>
    );
};

export default CartIcon;
