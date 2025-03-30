import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Carrousel = () => {    
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "/imgs/carrousel_1.png",
        "/imgs/carrouselDecants.png"
    ];
    const delay = 4000;  // Delay in milliseconds between slides

    const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % images.length);  // Move to the next slide
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % images.length); // Avanza al siguiente slide
        }, delay);
        return () => clearInterval(slideInterval);  // Limpia el intervalo al desmontar el componente
    }, []);

    const prevSlide = () => {
        setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));  // Move to the previous slide
    };

    return (
        <div>
            <div id="default-carousel" className="relative w-full mt-5" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">                
                    {images.map((image, index) => (
                        <div key={index} className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={image} alt="" className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>
                
                
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                
                <button type="button" onClick={prevSlide} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" onClick={nextSlide} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}
export default Carrousel;
