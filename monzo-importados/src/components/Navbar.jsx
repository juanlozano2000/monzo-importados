//Navbar.jsx
import React from 'react';
import '../assets/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCanSparkles, faVial, faPlus, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    // Icon data array
    const icons = [
        { icon: faSprayCanSparkles, label: 'Perfumes', color: 'text-blue-500' },
        { icon: faVial, label: 'Perfumeros', color: 'text-blue-500' },
        { icon: faMobileAlt, label: 'Tecnología', color: 'text-blue-500' }, // Corrected icon name
        { icon: faPlus, label: 'Otros', color: 'text-blue-500' }
    ];

    return (
        <nav className="bg-white overflow-x-auto py-3 flex justify-center items-center">
            <div className="flex justify-center items-center space-x-2 md:space-x-4">
                {icons.map((item, index) => (
                    <div key={index} className="text-center flex flex-col items-center w-20 md:w-24">
                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={item.icon} className={item.color} />
                        </div>
                        <p className="text-xs md:text-sm mt-1">{item.label}</p>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
