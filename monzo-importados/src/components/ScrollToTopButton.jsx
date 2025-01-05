import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar el botón cuando el usuario haga scroll hacia abajo
    const toggleVisibility = () => {
        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Desplazar hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transition duration-300"
            >
                <FontAwesomeIcon icon={faArrowUp} size="lg" />
            </button>
        )
    );
};

export default ScrollToTopButton;
