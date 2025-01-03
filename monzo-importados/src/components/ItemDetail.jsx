import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../assets/products.json'; // Asegúrate de tener los datos disponibles

const ItemDetail = () => {
    const { id } = useParams(); // Obtener el parámetro :id de la URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

    if (!item) {
        return <div className="text-center mt-10">Producto no encontrado</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md mt-10">
            <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
            <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-2">{item.description || 'Sin descripción'}</p>
            <p className="text-lg font-semibold">Precio: ${item.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Comprar Ahora
            </button>
        </div>
    );
};

export default ItemDetail;
