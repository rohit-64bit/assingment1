import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navRoutes } from './../services/Constants';
import { HashLink } from "react-router-hash-link";

const Header = () => {

    const [scrolling, setScrolling] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

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

        <header className={!scrolling ? "fixed top-0 w-full flex justify-between items-center py-4 px-28 bg-[#01100D]/70 backdrop-blur-md border-b border-white/20 text-white shadow-lg z-[1000] translate-y-0 duration-1000" : "fixed top-0 w-full flex justify-between items-center py-4 px-28 bg-[#01100D]/70 backdrop-blur-md border-b border-white/20 text-white shadow-lg z-[1000] -translate-y-30 duration-1000"}>

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
    )
}

export default Header