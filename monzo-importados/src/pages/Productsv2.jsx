// Productsv2.jsx
import React, { useState, useEffect, useContext } from 'react';
import '../assets/products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import productsData from '../assets/products.json'; // make sure the path matches where your products.json is stored
import { Link } from 'react-router-dom';
import Carrousel  from '../components/Carrousel.jsx';
import ProductosDestacados  from '../components/ProductosDestacados.jsx';
import { CartContext } from '../context/CartContext.jsx';

function SkeletonCard() {
    return (
        <div className="flex py-6 animate-pulse">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-300"></div>
            <div className="ml-4 flex flex-1 flex-col space-y-2">
                <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-300 rounded mt-2"></div>
            </div>
        </div>
    );
}

const Productsv2 = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

        useEffect(() => {
        window.scrollTo(0, 0);
        // Simula una llamada de red
        setTimeout(() => {
            const sortedProducts = productsData.sort((a, b) => {
                // Los productos sin stock van al final
                if (!a.status_active && b.status_active) return 1;
                if (a.status_active && !b.status_active) return -1;

                // Ordena alfabéticamente si ambos tienen el mismo estado
                return a.name.localeCompare(b.name);
            });

            setProductos(sortedProducts);
            setLoading(false);
        }, 500); // Delay para simular la llamada de red
    }, []);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Carrousel />
            <ProductosDestacados />
        </div>
    );
};

export default Productsv2;
