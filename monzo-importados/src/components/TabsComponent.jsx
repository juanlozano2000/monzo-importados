import React from 'react';

const TabsComponent = ({ activeTab, setActiveTab }) => {
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="me-2">
                <a href="#" onClick={() => handleTabClick('3 ml')}
                   className={`inline-block px-4 py-3 rounded-lg ${activeTab === '3 ml' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'}`}>
                    Decants 3ml
                </a>
            </li>
            <li className="me-2">
                <a href="#" onClick={() => handleTabClick('5 ml')}
                   className={`inline-block px-4 py-3 rounded-lg ${activeTab === '5 ml' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'}`}>
                    Decants 5ml
                </a>
            </li>
            <li className="me-2">
                <a href="#" onClick={() => handleTabClick('PACK Decants')}
                   className={`inline-block px-4 py-3 rounded-lg ${activeTab === 'PACK Decants' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'}`}>
                    PACK Decants
                </a>
            </li>
            <li className="me-2">
                <a href="#" onClick={() => handleTabClick('Todos')}
                   className={`inline-block px-4 py-3 rounded-lg ${activeTab === 'Todos' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'}`}>
                    Todos
                </a>
            </li>
        </ul>
    );
};

export default TabsComponent;
