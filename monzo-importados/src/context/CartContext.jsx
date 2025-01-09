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

    // Función para actualizar la cantidad de un producto en el carrito
    const updateQuantity = (id, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(newQuantity, 1) } // Evita cantidades menores a 1
                    : item
            )
        );
    };

    // Vaciar el carrito
    const clearCart = () =>{
        setCart([]);
        window.scrollTo(0, 0);
    };

    // Obtener el total de productos
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity ,removeFromCart, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};
