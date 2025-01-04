//Perfumeros.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import productsData from '../assets/products.json';  // make sure the path matches where your products.json is stored

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

const Perfumeros = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500)); // 500 ms de espera
            const filteredProducts = productsData.filter(
                (product) => product.type === "Perfumeros"
            );
            setProductos(filteredProducts);
            setLoading(false);
        };
    
        fetchProducts();
    }, []);
    

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Perfumeros</h1>
                <FontAwesomeIcon icon={faFilter} className="text-gray-600 text-2xl cursor-pointer" />
            </div>
            {loading ? (
                Array(2).fill(0).map((_, index) => <SkeletonCard key={index} />)
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {productos.map(product => (
                    <li key={product.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                                alt={product.name}
                                src={product.img}
                                className="h-full w-full object-cover object-center"
                            />
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
                                <Link to={`/product/${product.id}`}type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Comprar
                                </Link>
                                <Link to={`/product/${product.id}`} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Más detalles
                                </Link>
                            </div>
                        </div>
                    </li>
                        
                    ))}
                </div>
            )}
        </div>
    );
};

export default Perfumeros;
