// Products.jsx
import React, { useState, useEffect, useContext } from 'react';
import '../assets/products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import productsData from '../assets/products.json'; // make sure the path matches where your products.json is stored
import { Link } from 'react-router-dom';
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

const Products = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        // Simulate a fetch call
        setTimeout(() => {
            setProductos(productsData); // Assume your JSON file has an array of products
            setLoading(false);
        }, 500); // delay to mimic network call
    }, []);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Productos</h1>
                <FontAwesomeIcon icon={faFilter} className="text-gray-600 text-2xl cursor-pointer" />
            </div>
            {loading ? (
                Array(4).fill(0).map((_, index) => <SkeletonCard key={index} />)
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {productos.map(product => (
                        <li key={product.id} className="relative flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                                <img
                                    alt={product.name}
                                    src={product.img}
                                    className="h-full w-full object-cover object-center"
                                />
                                {!product.status_active && (
                                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                        Sin stock
                                    </span>
                                )}
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    {product.status_active ? (
                                        <>
                                            <button onClick={() => addToCart(product)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Añadir al carrito
                                            </button>
                                            <Link to={`/product/${product.id}`} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Más detalles
                                            </Link>
                                        </>
                                    ) : (
                                        <span className="text-red-500 font-medium">No disponible</span>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
