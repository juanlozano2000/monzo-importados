import React from 'react';
import productsData from '../assets/products.json'; // make sure the path matches where your products.json is stored
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const productosDestacadosId = [5, 54, 17, 69, 70, 62]

const ProductosDestacados = () => {
    const destacados = productosDestacadosId
    .map(id => productsData.find(p => p.id === id))
    .filter(Boolean); // filtra los undefined por si algún id no existe

    return (
        <div className='pb-5'>
            <h1 className='text-lg pt-5 pb-3'>Productos Destacados</h1>

            <div className="overflow-x-auto">
                <div className="flex gap-4 w-max px-4">
                    {destacados.map((producto) => (
                        <div className="max-w-[180px] h-[270px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm">
                            <Link to={`/product/${producto.id}`} key={producto.id}>
                                <img className="rounded-t-lg w-full h-[150px] object-contain" src={producto.img} alt={producto.name} />
                            </Link>
                            <div className="p-3 flex flex-col justify-between flex-grow">
                                <Link to={`/product/${producto.id}`} key={producto.id}>
                                    <h3 className="text-blue-500 hover:underline line-clamp-2">{producto.name}</h3>
                                </Link>
                                <p className="font-semibold mt-1">${new Intl.NumberFormat('es-AR').format(producto.price)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProductosDestacados;