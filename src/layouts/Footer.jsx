import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../services/Constants'

const Footer = () => {
    return (
        <footer>
            <div className='w-full h-max p-24 bg-black/80 flex justify-between'>

                <div className="flex flex-col gap-4 w-max">

                    <Link
                        to='/'
                        className='font-bold text-xl text-white'
                    >
                        ByteDev.in
                    </Link>

                    <p className='text-white/70 w-[40%]'>
                        We are a team of professionals who are dedicated to providing the best services to our clients.
                    </p>

                </div>

                <div className="flex gap-10">

                    {
                        footerLinks.map((footerLink, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-5'>

                                    <p className='text-white font-bold'>
                                        {footerLink.title}
                                    </p>

                                    {
                                        footerLink.links.map((link, index) => {
                                            return (
                                                <Link
                                                    to={link.link}
                                                    key={index}
                                                    className='text-white/70 hover:text-white duration-300'
                                                >
                                                    {link.name}
                                                </Link>
                                            )
                                        })
                                    }

                                </div>
                            )
                        })
                    }

                </div>

            </div>
            <div className='w-full bg-black text-white/70 text-center p-5 text-sm'>
                <p>
                    &copy; 2022 ByteDev.in. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer