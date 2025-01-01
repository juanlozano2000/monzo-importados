//Products.jsx
import React, { useState, useEffect } from 'react';
import '../assets/products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const Products = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a fetch call
        setTimeout(() => {
            setProductos(productsData);  // Assume your JSON file has an array of products
            setLoading(false);
        }, 1500); // delay to mimic network call
    }, []);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Productos</h1>
            {loading ? (
                Array(4).fill(0).map((_, index) => <SkeletonCard key={index} />)
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {productos.map(product => (
                        <div key={product.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md">
                            <div className="h-24 w-full bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${product.image})` }}></div>
                            <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
                            <p className="text-gray-600">${product.price}</p>
                            {/* Optionally, display an icon or any other details */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
