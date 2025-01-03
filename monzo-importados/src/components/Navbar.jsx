import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCanSparkles, faVial, faPlus, faMobileAlt, faHouse } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    // Estado para el Dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Icon data array
    const icons = [
        { href: '/', icon: faHouse, label: 'Inicio', color: 'text-blue-500' },
        { href: '/perfumes', icon: faSprayCanSparkles, label: 'Perfumes', color: 'text-blue-500' },
        { href: '/perfumeros', icon: faVial, label: 'Perfumeros', color: 'text-blue-500' },
        { href: '/tecnologia', icon: faMobileAlt, label: 'Tecnología', color: 'text-blue-500' }
    ];

    return (
        <nav className="bg-white overflow-x-auto py-3 flex justify-center items-center">
            <div className="flex justify-center items-center space-x-2 md:space-x-4 pl-4 md:pl-0">
                {icons.map((item, index) => (
                    <Link to={item.href} key={index} className="text-center flex flex-col items-center w-20 md:w-24 ml-7 md:ml-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={item.icon} className={item.color} />
                        </div>
                        <p className="text-xs md:text-sm mt-1">{item.label}</p>
                    </Link>
                ))}

                {/* Dropdown en "Otros" */}
                <div className="relative ml-7 md:ml-0">
                    <button onClick={toggleDropdown} className="text-center flex flex-col items-center w-20 md:w-24">
                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faPlus} className="text-blue-500" />
                        </div>
                        <p className="text-xs md:text-sm mt-1 ">Otros</p>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 mr-5 w-30 bg-white border border-red-400 rounded-md shadow-lg z-50 text-sm">
                            <ul className="py-1">
                                <li>
                                    <Link to="/reviews" className="block px-4 py-2 hover:bg-gray-100">
                                        Reseñas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/news" className="block px-4 py-2 hover:bg-gray-100">
                                        Novedades
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
                                        Sobre Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
