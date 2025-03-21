import React from 'react';

const TabsGender = ({ activeTab, setActiveTab }) => {
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="me-2">
                <a href="#" onClick={() => handleTabClick('male')}
                   className={`inline-block px-4 py-3 rounded-lg ${activeTab === 'male' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'}`}>
                    Masculino
                </a>
            </li>
            <li className="me-2">
                <a href="#" onClick={() => handleTabClick('female')}
                   className={`inline-block px-4 py-3 rounded-lg ${activeTab === 'female' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'}`}>
                    Femenino
                </a>
            </li>
            <li className="me-2">
                <a href="#" onClick={() => handleTabClick('unisex')}
                   className={`inline-block px-4 py-3 rounded-lg ${activeTab === 'unisex' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'}`}>
                    Unisex
                </a>
            </li>
        </ul>
    );
};

export default TabsGender;
