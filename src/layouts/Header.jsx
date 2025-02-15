import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navRoutes } from './../services/Constants';
import { HashLink } from "react-router-hash-link";

const Header = () => {

    const [scrolling, setScrolling] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {

        let timeoutId;

        // Function to handle scroll events
        const handleScroll = () => {
            const currentPosition = window.scrollY;

            if (currentPosition > scrollPosition || currentPosition < scrollPosition) {
                // Set 'scrolling' to true when the user has scrolled down a certain amount (e.g., 100 pixels)
                setScrolling(true);
            } else {
                // Set 'scrolling' to false when the user scrolls back up
                setScrolling(false);
            }

            // Reset the timeout whenever there's a scroll event
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                setScrolling(false);
            }, 2000);

        };

        // Add a scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Clear the timeout to avoid memory leaks
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <header className={!scrolling ? "fixed top-0 w-full hidden xl:flex justify-between items-center py-4 px-6 md:px-16 lg:px-28 bg-[#01100D]/70 backdrop-blur-md border-b border-white/20 text-white shadow-lg z-[1000] translate-y-0 duration-1000" : "fixed top-0 w-full hidden xl:flex justify-between items-center py-4 px-6 md:px-16 lg:px-28 bg-[#01100D]/70 backdrop-blur-md border-b border-white/20 text-white shadow-lg z-[1000] -translate-y-30 duration-1000"}>

                <Link
                    to='/'
                    className='font-medium text-xl'
                >
                    Techsectra.com
                </Link>

                <div className='flex gap-10 items-center'>

                    <nav className='flex gap-5'>

                        {navRoutes.map((route, index) => {
                            return (

                                route.isHashLink ?
                                    <HashLink
                                        to={route.link}
                                        key={index}
                                        className='text-lg duration-300 hover:text-[#E8BF6A] font-medium'
                                    >
                                        {route.name}
                                    </HashLink>
                                    :
                                    <Link
                                        to={route.link}
                                        key={index}
                                        className='text-lg duration-300 hover:text-[#E8BF6A] font-medium'
                                    >
                                        {route.name}
                                    </Link>
                            )
                        })}

                    </nav>

                    <HashLink className='border border-white/20 hover:border-green-400 hover:bg-[#E8BF6A] hover:text-black px-10 py-2 rounded-xl duration-300 font-semibold' to='/#get-started'>
                        Get Started
                    </HashLink>

                </div>

            </header>

            <header className="fixed top-0 w-full xl:hidden flex justify-between items-center px-6 md:px-16 lg:px-28 py-5 bg-[#01100D]/70 backdrop-blur-md border-b border-white/20 text-white shadow-lg z-[1000] duration-1000">

                <Link
                    to='/'
                    className='font-medium text-xl'
                >
                    Techsectra.com
                </Link>

                <button className='flex flex-col gap-1' onClick={() => setIsMenuOpen(!isMenuOpen)}>

                    <div className={isMenuOpen ? "w-8 h-1 rounded-full bg-white rotate-45 transform translate-y-1 duration-300" : "w-8 h-1 bg-white transform duration-300 rounded-full"}></div>
                    <div className={isMenuOpen ? "w-8 h-1 rounded-full bg-white rotate-45 transform duration-300 hidden" : "w-8 h-1 bg-white transform duration-300 rounded-full"}></div>
                    <div className={isMenuOpen ? "w-8 h-1 rounded-full bg-white -rotate-45 -translate-y-1 transform duration-300" : "w-8 h-1 bg-white transform duration-300 rounded-full"}></div>

                </button>

            </header>

            <nav className={isMenuOpen ? "fixed top-0 left-0 h-full bg-[#01100D] text-white z-[999] w-full rounded-xl flex flex-col gap-5 justify-center duration-500 transition-all ease-in-out p-8" : "hidden"}>

                {navRoutes.map((route, index) => {
                    return (

                        route.isHashLink ?
                            <HashLink
                                to={route.link}
                                key={index}
                                className='text-lg duration-300 hover:text-[#E8BF6A] font-medium'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {route.name}
                            </HashLink>
                            :
                            <Link
                                to={route.link}
                                key={index}
                                className='text-lg duration-300 hover:text-[#E8BF6A] font-medium'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {route.name}
                            </Link>
                    )
                })}

                <HashLink className='border border-white/20 hover:border-green-400 hover:bg-[#E8BF6A] hover:text-black px-10 py-2 rounded-xl duration-300 font-semibold text-center' to='/#get-started'>
                    Get Started
                </HashLink>

            </nav>

        </>
    )
}

export default Header