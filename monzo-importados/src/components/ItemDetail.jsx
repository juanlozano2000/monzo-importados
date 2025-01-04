import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import productsData from '../assets/products.json'; // Asegúrate de tener los datos disponibles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ItemDetail = () => {
    const { id } = useParams(); // Obtener el parámetro :id de la URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }
        // Buscar el producto en el JSON por ID
        const selectedItem = productsData.find(product => product.id === parseInt(id));

        if (selectedItem) {
            setItem(selectedItem);
        }

        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className="text-center mt-10">Cargando...</div>;
    }

    if (!id || !item) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md mt-3 md:mt-10 mb-10">
            <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        {/* Imagen */}
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img className="w-full max-h-64 object-contain dark:hidden rounded-md" src={item.img} alt={item.name} />
                        </div>

                        {/* Detalles del producto */}
                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                {item.name}
                            </h1>
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                    ${item.price}
                                </p>

                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className="w-4 h-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Botones de acción */}
                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 flex-col sm:flex-row">
                                <a
                                    href="#"
                                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full sm:w-auto"
                                >
                                    <FontAwesomeIcon icon={faHeart} className='mr-2' size='lg'/>
                                    Añadir a favoritos
                                </a>
                                <a
                                    href="#"
                                    className="mt-4 sm:mt-0 sm:ml-4 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 w-full sm:w-auto flex items-center justify-center"
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} className='mr-2' size='lg'/>
                                    Añadir al carrito
                                </a>
                            </div>

                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-500 dark:text-gray-400">
                                {item.description || 'Sin descripción'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ItemDetail;
