import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCanSparkles, faVial, faPlus, faMobileAlt, faHouse } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown.jsx';

const Navbar = () => {
    // Icon data array
    const icons = [
        { href: '/', icon: faHouse, label: 'Inicio', color: 'text-blue-500' },
        { href: '/perfumes', icon: faSprayCanSparkles, label: 'Perfumes', color: 'text-blue-500' },
        { href: '/perfumeros', icon: faVial, label: 'Perfumeros', color: 'text-blue-500' },
        { href: '/tecnologia', icon: faMobileAlt, label: 'Tecnología', color: 'text-blue-500' },
        { href: '/otros', icon: faPlus, label: 'Otros', color: 'text-blue-500' }
    ];

    return (
        <nav className="bg-white overflow-x-auto py-3 flex justify-center items-center">
            <div className="flex justify-center items-center space-x-2 md:space-x-4 pl-4 md:pl-0">
                {icons.map((item, index) => (
                    <Link to={item.href} key={index} className="text-center flex flex-col items-center w-20 md:w-24  ml-7 md:ml-0"> {/* en celus hay margin 7 y en grandes NO */}
                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={item.icon} className={item.color} />
                        </div>
                        <p className="text-xs md:text-sm mt-1">{item.label}</p>
                    </Link>
                ))}

                {/* Dropdown para "Otros" */}
                <div className="ml-7 md:ml-0">
                    <Dropdown />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
