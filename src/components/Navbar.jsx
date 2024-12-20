import React from 'react';
import logo from '../assets/logo.svg'
import homeIcon from '../assets/homeIcon.svg'
import downArrow from '../assets/downArrow.svg'
import programIcon from '../assets/Program.svg'
import shoppingCartIcon from '../assets/shoppingCard.svg'
import testSeriesIcon from '../assets/TestSereries.svg'
import profileIcon from '../assets/profile.svg'
function Navbar() {
    const NavItems = [
        {
            icon: homeIcon,
            item: 'Home',
            link: '#home',
        },
        {
            icon: programIcon,
            item: 'Program',
            link: '#program',
        },
        {
            icon: testSeriesIcon,
            item: 'Test Series',
            link: '#test-series',
        },
        {
            icon: shoppingCartIcon,
            item: 'My Cart',
            link: '#cart',
        },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-[173px] h-[50px]" />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    {NavItems.map((navItem, index) => (
                        <a
                            key={index}
                            href={navItem.link}
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
                        >
                            <div className="flex gap-2 items-center">
                                {navItem.icon && <span className="">
                                    <img src={navItem.icon} alt="Logo" className="w-[20px] h-[20px]" />
                                </span>}
                                {navItem.item}
                            </div>
                        </a>
                    ))}

                    <div className='text-gray-700 hover:text-purple-600 font-medium
                     transition-colors duration-300 flex gap-2 flex-row items-center'>
                        <span>More</span>
                        <span>  <img src={downArrow} alt="Logo" className="w-[20px] h-[20px]" /> </span>
                    </div>
                </div>

                {/* Profile Icon */}
                <div>
                    <img
                        src={profileIcon}
                        alt="Profile"
                        className="w-[50px] h-[50px] rounded-full border-2 border-purple-600"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;