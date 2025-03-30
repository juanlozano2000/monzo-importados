import React, { useState, useEffect, useContext } from 'react';
import { useParams, Navigate, useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import productsData from '../assets/products.json'; // Asegúrate de tener los datos disponibles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext.jsx';

const ItemDetail = () => {
    const { id } = useParams(); // Obtener el parámetro :id de la URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext); // Acceder al contexto del carrito
    const navigate = useNavigate(); // Hook para navegar

    // 🔄 Desplazar hacia arriba cuando el componente se monte
    useEffect(() => {
        window.scrollTo(0, 0);
        const selectedItem = productsData.find(product => product.id === parseInt(id));
        if (selectedItem) {
            setItem(selectedItem);
        }
        setLoading(false);
    }, [id]);

    // Buscar el producto por ID
    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }
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

    const isPackDecants = item.size === "PACK Decants";

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md mt-3 md:mt-10 mb-10 relative">
            {/* Botón de regreso */}
            <button onClick={() => navigate(-1)} className="absolute top-4 left-4">
                <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 hover:text-gray-800" />
            </button>
            

            {/* Indicador Sin Stock */}
            {!item.status_active && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-md z-10">
                    Sin stock
                </div>
            )}

            <section className="py-8 bg-white md:py-16 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        {/* Imagen */}
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img
                                className="w-full max-h-64 object-contain rounded-md"
                                src={item.img}
                                alt={item.name}
                            />
                        </div>

                        {/* Detalles del producto */}
                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                                {item.name}
                            </h1>
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                    ${new Intl.NumberFormat('es-AR').format(item.price)}
                                </p>
                            </div>

                            {/* Bloque de Mercado Libre */}
                            <div className="flex justify-between items-center mt-2  border border-yellow-200 p-2 rounded-lg shadow-lg">
                                <p className="text-l font-medium text-red-700 line-through mr-2">
                                    ${new Intl.NumberFormat('es-AR').format(item.priceOutside)}
                                </p>
                                <img src="/imgs/logo-ml.png" alt="Mercado Libre" className="w-8 h-8 ml-2"/>
                            </div>

                            {/* Botones de acción */}
                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 flex-col sm:flex-row">
                                {/* Botón de carrito */}
                                <button
                                    onClick={() => addToCart(item)}
                                    disabled={!item.status_active}
                                    className={`mt-4 sm:mt-0 sm:ml-4 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center w-full sm:w-auto ${
                                        item.status_active
                                            ? 'bg-blue-500 hover:bg-blue-700 text-white'
                                            : 'bg-gray-400 text-gray-300 cursor-not-allowed'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" size="lg" />
                                    {item.status_active ? 'Añadir al carrito' : 'No disponible'}
                                </button>
                            </div>

                            <hr className="my-6 md:my-8 border-gray-200" />

                            <p className="mb-6 text-gray-500">
                                {item.description || 'Sin descripción'}
                            </p>

                        </div>
                    </div>
                </div>

            </section>

            {
                isPackDecants && (
                    <>
                        <p className='text-3xl text-gray-900'>Este Pack contiene:</p>
                        <div className='text-center p-5 text-sm text-gray-900'>
                            <p className='p-3'>{item.name_1}</p>
                            <p className='p-3'>{item.name_2}</p>
                            <p className='p-3'>{item.name_3}</p>
                        </div>
                    </>
                )
            }

            {!isPackDecants && (
                <>
                    {/* Notas del Perfume */}
                    <section className="mt-5 p-4">
                        <h2 className="text-lg font-semibold mb-4 text-center">Notas Principales</h2>
                        
                        {/* Notas de Salida */}
                        <div className="mb-6 text-center">
                            <h3 className="text-md font-bold mb-2">Notas de Salida</h3>
                            <div className="flex justify-center gap-4 flex-wrap">
                                {item.notes?.Salida?.map((note, index) => (
                                    <div key={index} className="text-center">
                                        <img 
                                            src={note.img} 
                                            alt={note.name} 
                                            className="w-16 h-16 object-contain mx-auto mb-1"
                                        />
                                        <p className="text-sm">{note.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Notas de Corazón */}
                        <div className="mb-6 text-center">
                            <h3 className="text-md font-bold mb-2">Corazón</h3>
                            <div className="flex justify-center gap-4 flex-wrap">
                                {item.notes?.Corazon?.map((note, index) => (
                                    <div key={index} className="text-center">
                                        <img 
                                            src={note.img} 
                                            alt={note.name} 
                                            className="w-16 h-16 object-contain mx-auto mb-1"
                                        />
                                        <p className="text-sm">{note.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Notas de Base */}
                        <div className="text-center">
                            <h3 className="text-md font-bold mb-2">Base</h3>
                            <div className="flex justify-center gap-4 flex-wrap">
                                {item.notes?.Base?.map((note, index) => (
                                    <div key={index} className="text-center">
                                        <img 
                                            src={note.img} 
                                            alt={note.name} 
                                            className="w-16 h-16 object-contain mx-auto mb-1"
                                        />
                                        <p className="text-sm">{note.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>



                    {/* Acordes del Perfume */}
                    <section className="mt-5 p-2">
                        <h2 className="text-lg font-semibold mb-4">Acordes Principales</h2>
                        <div className="space-y-2">
                            {item.acordes?.map((acorde, index) => (
                                <div key={index} className="relative">
                                    <div className="text-sm font-medium mb-1">
                                        {acorde.name} {acorde.percentage}%
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-700 ease-in-out"
                                            style={{
                                                background: `${acorde.background}`,  
                                                width: `${acorde.percentage}%`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default ItemDetail;
