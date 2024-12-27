//Header.jsx
import React from 'react';


const Header = () => {
    return (
        <>
            <section className="bg-black text-white body-font">
                <div className="container px-5 py-4 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Monzo Importados</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Perfumería - Tecnología - Pedidos particulares - Más</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
