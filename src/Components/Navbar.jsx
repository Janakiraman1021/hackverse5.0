import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { TbBrightnessUp } from "react-icons/tb";
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [showLogout, setShowLogout] = useState(false);
    const dropdownRef = useRef(null);
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const { darkMode, setModeDark, setModeLight } = useTheme();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleLogout = () => {
        setShowLogout(!showLogout);
    };
    // const toggleTheme = () => {
    //     setIsDarkMode(!isDarkMode); 
    //   };

    const toggleTheme = () => {
        if (darkMode) {
            setModeLight();
        } else {
            setModeDark();
        }
    };


    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        setUserEmail('');
        setShowLogout(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowLogout(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setUserEmail(storedEmail);
        }
    }, []);

    // useEffect(() => {
    //     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //         document.documentElement.classList.remove("dark");
    //         setIsDarkMode(true);
    //     }
    // }, []);


    return (
        <nav className="bg-[#303030] p-4 rounded-full flex justify-between items-center mx-4 lg:mx-32">
            <div className="text-white font-bold text-2xl ml-4 ">
                SecureTrace
            </div>


            <div className="hidden lg:flex space-x-8 text-white">
                <Link to="/" className="hover:text-gray-400">Dashboard</Link>
                <Link to="/visualizer" className="hover:text-gray-400">Visualizer</Link>
                <Link to="/portfoliotracker" className="hover:text-gray-400">Portfolio Tracker</Link>
                <Link to="/creditscore" className="hover:text-gray-400">Credit Score</Link>
            </div>
            {/* <div className='text-white flex justify-end'>
            <IoSunnyOutline />
            <IoMoonOutline />
            </div> */}
            {userEmail ? (
                <div className="relative hidden lg:flex" ref={dropdownRef}>
                    <div className='flex gap-4'>
                        <div className='text-white text-2xl mt-2 cursor-pointer' onClick={toggleTheme}>
                            {/* <IoSunnyOutline /> */}
                            {/* <IoMoonOutline /> */}
                            {darkMode ? <TbBrightnessUp /> : <IoMoonOutline />}

                        </div>
                        <button onClick={toggleLogout} className="hidden lg:flex bg-white text-black rounded-full px-4 py-2">{userEmail}</button>
                    </div>
                    {showLogout && (
                        <div className="absolute right-0 mt-12 bg-white text-black rounded-md shadow-lg py-2">
                            <button
                                className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className='hidden lg:flex justify-center gap-4'>
                    <div className='text-white text-2xl mt-2 cursor-pointer' onClick={toggleTheme}>
                        {/* <IoSunnyOutline /> */}
                        {/* <IoMoonOutline /> */}
                        {darkMode ? <TbBrightnessUp /> : <IoMoonOutline />}

                    </div>
                    <Link to='/loginpage'>
                        <button className="hidden lg:flex bg-white text-black rounded-full px-4 py-2">
                            Login
                        </button>
                    </Link>
                </div>
            )}

            <div className="lg:hidden flex justify-center gap-2 text-white">
                <div className='text-white text-2xl cursor-pointer' onClick={toggleTheme}>
                    {/* <IoSunnyOutline /> */}
                    {/* <IoMoonOutline /> */}
                    {darkMode ? <TbBrightnessUp /> : <IoMoonOutline />}

                </div>
                <div onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[#303030] mt-6 mx-4 text-white flex flex-col items-center space-y-4 py-4 rounded-lg">
                    <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>Dashboard</Link>
                    <Link to="/visualizer" className="hover:text-gray-400" onClick={toggleMenu}>Visualizer</Link>
                    <Link to="/portfoliotracker" className="hover:text-gray-400" onClick={toggleMenu}>Portfolio Tracker</Link>
                    <Link to="/creditscore" className="hover:text-gray-400" onClick={toggleMenu}>Credit Score</Link>
                    {userEmail ? (
                        <div className="relative flex lg:hidden" ref={dropdownRef}>
                                <button onClick={toggleLogout} className="lg:hidden flex bg-white text-black rounded-full px-4 py-2">{userEmail}</button>
                            {showLogout && (
                                <div className="absolute right-0 mt-12 bg-white text-black rounded-md shadow-lg py-2">
                                    <button
                                        className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to='/loginpage'>
                            <button className="md:hidden flex bg-white text-black rounded-full px-4 py-2">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            )}

        </nav>
    );
};

export default Navbar;
