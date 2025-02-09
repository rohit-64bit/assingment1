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
        <div className='w-full flex items-center justify-center'>

            <header className="fixed top-0 mt-5 w-[97%] flex justify-between items-center py-4 px-20 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg z-20">

                <Link
                    to='/'
                    className='font-bold text-xl'
                >
                    ByteDev.in
                </Link>

                <nav className='flex gap-5'>

                    {navRoutes.map((route, index) => {
                        return (

                            route.isHashLink ?
                                <HashLink
                                    to={route.link}
                                    key={index}
                                    className='text-lg duration-300 hover:text-blue-500 font-medium'
                                >
                                    {route.name}
                                </HashLink>
                                :
                                <Link
                                    to={route.link}
                                    key={index}
                                    className='text-lg duration-300 hover:text-blue-500 font-medium'
                                >
                                    {route.name}
                                </Link>
                        )
                    })}

                </nav>

                <HashLink className='border border-white/20 hover:border-blue-500 hover:bg-white hover:text-black px-10 py-2 rounded-xl duration-300 font-semibold' to='/#get-started'>
                    Get Started
                </HashLink>

            </header>

        </div>
    )
}

export default Header