import React from 'react';

const Otros = () => {
    return (
        <div className='flex flex-col items-center justify-center p-10'> 
            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./imgs/perfumero.jpeg" alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Solicitar pedido particular</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Quiero solicitar un pedido particular para el futuro que no encontre en esta tienda actualmente.</p>
                </div>
            </a>
            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./imgs/perfumero.jpeg" alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Opiniones / Reseñas</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mira lo que los clientes opinan sobre nosotros!</p>
                </div>
            </a>
            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./imgs/perfumero.jpeg" alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sobre nosotros</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mira quienes somos?</p>
                </div>
            </a>
            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./imgs/perfumero.jpeg" alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contacto</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Contactanos!</p>
                </div>
            </a>
        </div>
    );
};

export default Otros;