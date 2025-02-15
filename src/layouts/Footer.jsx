import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../services/Constants'

const Footer = () => {
    return (
        <footer>
            {/* Main Footer */}
            <div className='w-full px-6 md:px-16 lg:px-28 py-16 md:py-24 lg:py-32 bg-[#01100D] flex flex-col lg:flex-row lg:justify-between gap-10'>
                {/* Company Information */}
                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                    <Link
                        to='/'
                        className='font-bold text-2xl text-white'
                    >
                        Techsectra.com
                    </Link>
                    <p className='text-white/70 w-full md:w-3/4'>
                        We are a team of professionals who are dedicated to providing the best services to our clients.
                    </p>
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap gap-10 lg:gap-16">
                    {footerLinks.map((footerLink, index) => (
                        <div key={index} className='flex flex-col gap-4 min-w-[150px]'>
                            <p className='text-white font-bold'>
                                {footerLink.title}
                            </p>
                            {footerLink.links.map((link, index) => (
                                <Link
                                    to={link.link}
                                    key={index}
                                    className='text-white/70 hover:text-white duration-300'
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Copyright */}
            <div className='w-full bg-black text-white/70 text-center p-5 text-sm'>
                <p>
                    &copy; TechSectra Consultants is a sister company of &nbsp;
                    <a href="https://www.netgearsolution.com/" className="text-blue-500 hover:underline">
                        Netgear Solution
                    </a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer
