import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito
    const addToCart = (item) => {
        setCart((prevCart) => {
            //En caso de que el producto ya exista en el carrito, se incrementa la cantidad
            const existingItem = prevCart.find((i) => i.id === item.id);
            if (existingItem) {
                return prevCart.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    // Eliminar un producto del carrito
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((i) => i.id !== id));
    };

    // Vaciar el carrito
    const clearCart = () => setCart([]);

    // Obtener el total de productos
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};
