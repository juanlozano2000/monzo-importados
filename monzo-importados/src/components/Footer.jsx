import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {        
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <p className="text-base leading-relaxed text-gray-600 mt-7">MONZO IMPORTADOS</p>
                        <p className="text-base leading-relaxed text-gray-600 mt-7">Conseguí tus productos favoritos fácil y a precios increíbles. Perfumes, tecnología y más, con precios nunca vistos. ¡Seguinos en redes sociales! 🚀✨</p>

                        {/* Redes sociales */}
                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a href="https://wa.me/5491138756897?text=%C2%A1Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20productos." 
                                target='_blank' title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-green-600 focus:bg-green-600 cursor-pointer">
                                <FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/monzo.importados/" target='_blank' title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-pink-600 focus:bg-pink-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>


                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link to="/Perfumes" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Perfumes </Link>
                            </li>

                            <li>
                                <Link to="/Perfumeros" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Perfumeros </Link>
                            </li>

                            <li>
                                <Link to="/Tecnologia" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Tecnología </Link>
                            </li>

                            <li>
                                <Link to="/Opiniones" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Reseñas/Opiniones </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Ayuda</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link to="/Contacto" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contacto </Link>
                            </li>

                            <li>
                                <Link to="/terminos-y-condiciones" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terminos y condiciones </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Ingresá al grupo de difusión</p>

                        <div className='flex justify-center mt-6'>
                            <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-green-600 rounded-md hover:bg-green-700 focus:bg-blue-700">
                                <FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} className='mr-2' />
                                Canal de difusión
                            </button>
                        </div>
                        
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-gray-600">© Copyright 2025, All Rights Reserved by Monzo Importados</p>
            </div>
        </section>
    )
}
export default Footer;