import React from 'react'
import ServiceDetails from '../components/ServiceDetails'
import { partnersData, serviceData, socialMediaLinks } from '../services/Constants'
import AboutImg from "../assets/aboutimg.png"
import HeroBg from "../assets/herobg.svg"
import ClientOnboardingTimeline from './../components/ClientOnboardingTimeline';
import TestimonialCard from '../components/TestimonialCard'
import { HashLink } from 'react-router-hash-link'
import PartnersSlider from '../components/PartnersSlider'
import { fetchTestimonialSheetData } from '../apis/TestimonialApis'
import { useQuery } from '@tanstack/react-query'

const Home = () => {

    const { data: testimonialData, isLoading, error } = useQuery({
        queryKey: ["testimonialData"],
        queryFn: fetchTestimonialSheetData,
    });

    return (
        <>
            {/* Heros Section */}
            <section id='home' className='relative min-h-screen max-h-max flex items-center justify-center bg-black'>

                <div className='text-center flex flex-col items-center justify-center gap-2 z-10'>

                    <div className='flex items-center justify-center border border-white/50 mb-5 px-5 py-0.5 w-max text-sm text-white rounded-md'>

                        AI Powered SAAS Solutions

                    </div>

                    <p className='text-6xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>
                        Transform Your Business
                    </p>

                    <p className='text-6xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>
                        With Saas Solutions
                    </p>

                    <div className='flex items-center justify-center gap-5 mt-5'>

                        <HashLink to="/#get-started" className="w-max py-3 px-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg hover:border-blue-500 hover:bg-white hover:text-black duration-300 font-semibold">
                            Get Started
                        </HashLink>

                    </div>

                </div>

                <div className="absolute inset-0 -z-0 m-auto flex justify-center items-center">
                    <img src={HeroBg} alt="" className='w-full' />
                </div>

            </section>

            {/* About Section */}
            <section id='about' className='min-h-screen max-h-max flex flex-col gap-24 px-28 py-32 items-center justify-between bg-black'>

                <div className="flex flex-col items-center gap2">

                    <div className='flex items-center justify-center border border-white/50 mb-5 px-5 py-0.5 w-max text-sm text-white rounded-md'>
                        About Us
                    </div>

                    <div className='text-6xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>
                        Learn More About Us Here
                    </div>

                </div>

                <div className='flex justify-around gap-32 w-full'>

                    <div className='flex flex-col gap-5 w-full'>

                        {/* stats */}

                        <div>

                            <div className='text-5xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>
                                100 +
                            </div>

                            <div className='text-white text-sm'>
                                Projects Completed
                            </div>

                        </div>

                        <div>

                            <div className='text-5xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>

                                1000 +

                            </div>

                            <div className='text-white text-sm'>

                                Happy Clients

                            </div>

                        </div>

                        <div>

                            <div className='text-5xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>

                                50 +

                            </div>

                            <div className='text-white text-sm'>

                                Team Members

                            </div>

                        </div>

                    </div>

                    <img src={AboutImg} alt="" className='w-[25%] -ml-5 grayscale' />

                    <div className='w-full'>

                        <div className='flex flex-col gap-5'>

                            <div className='text-4xl text-white'>
                                Our Team
                            </div>

                            <div className='flex items-center gap-2'>
                                <img src="https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg" alt="" className='w-12 h-12 object-cover aspect-square rounded-full border-2 border-white' />
                                <img src="https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg" alt="" className='w-12 h-12 object-cover aspect-square rounded-full border-2 border-white' />
                                <img src="https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg" alt="" className='w-12 h-12 object-cover aspect-square rounded-full border-2 border-white' />
                                <img src="https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg" alt="" className='w-12 h-12 object-cover aspect-square rounded-full border-2 border-white' />

                                <p className='text-white ml-2'>
                                    10+<br />More
                                </p>
                            </div>

                        </div>

                        <div className='border-2 border-t border-slate-800 my-12' />

                        <p className='text-white/70 w-[85%] text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem vitae fugiat saepe ipsam illo? Laborum magnam quam, maiores harum, temporibus eos, eligendi nobis quidem.
                        </p>

                        <p className='text-white mt-8 font-medium'>
                            John Doe, CEO
                        </p>

                    </div>

                </div>

                <PartnersSlider partnersData={partnersData} />

            </section>

            {/* Services Section */}
            <section id='services' className='min-h-screen max-h-max flex flex-col gap-24 px-28 py-32 items-center justify-between bg-black'>

                <div className="flex flex-col items-center gap2">

                    <div className='flex items-center justify-center border border-white/50 mb-5 px-5 py-0.5 w-max text-sm text-white rounded-md'>
                        What we offer
                    </div>

                    <div className='text-6xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>
                        Our Services
                    </div>

                </div>

                <div className='grid grid-cols-3 gap-5'>

                    {serviceData.map((data, index) => {
                        return (
                            <ServiceDetails key={index} data={data} />
                        )
                    })}


                </div>

            </section>

            {/* Testimonials Section */}
            <section id='testimonials' className='min-h-screen max-h-max flex flex-col gap-24 px-28 py-32 items-center justify-between bg-black'>

                <div className="flex flex-col items-center gap2">

                    <div className='flex items-center justify-center border border-white/50 mb-5 px-5 py-0.5 w-max text-sm text-white rounded-md'>
                        Testimonials
                    </div>

                    <div className='text-6xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>
                        What Our Clients Say About Us
                    </div>

                </div>

                <div className='grid grid-cols-3 gap-5'>

                    {
                        testimonialData?.map((data, index) => {
                            return (
                                <TestimonialCard key={index} data={data} />
                            )
                        })
                    }


                </div>

            </section>

            {/* Get Started Section */}
            <section id='get-started' className='min-h-screen max-h-max flex flex-col gap-24 px-28 py-32 items-center justify-between bg-black'>

                <div className="flex flex-col items-center gap-2 mb-10">

                    <div className='flex items-center justify-center border border-white/50 mb-5 px-5 py-0.5 w-max text-sm text-white rounded-md'>
                        Get Started
                    </div>

                    <div className='text-6xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>
                        Start Your Journey With Us
                    </div>

                </div>

                <ClientOnboardingTimeline />

            </section>

            {/* Contact Section */}
            <section id='contact' className='min-h-screen max-h-max flex flex-col gap-24 px-28 py-32 items-center bg-black'>

                <div className="flex flex-col items-center gap-2">

                    <div className='flex items-center justify-center border border-white/50 mb-5 px-5 py-0.5 w-max text-sm text-white rounded-md'>
                        Contact Us
                    </div>

                    <div className='text-6xl font-light bg-gradient-to-r from-slate-700 via-white to-slate-700 bg-clip-text text-transparent'>
                        Get In Touch With Us
                    </div>

                </div>

                <div className='flex gap-24 w-full h-full'>

                    <div className='w-full h-full flex flex-col justify-end gap-5'>

                        <div className='flex flex-col gap-5 h-max'>

                            <p className='text-white/70 text-xl'>
                                Follow us on social media for updates and news.
                            </p>

                            <div className='flex gap-5 text-3xl text-white'>

                                {socialMediaLinks.map((link, index) => {
                                    return (
                                        <a href={link.link} key={index} target='_blank' className='hover:scale-105 duration-300'>
                                            <link.icon />
                                        </a>
                                    )
                                })}

                            </div>

                        </div>

                    </div>

                    <form method='POST' className="w-[50%] h-full flex flex-col gap-5 p-10 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg">

                        <p className='text-white/70 text-sm'>
                            Fill out the form below and we will get back to you as soon as possible.
                        </p>

                        <label htmlFor="name" className='w-full'>
                            <p className='text-xs text-white/70 font-medium mb-2'>
                                Name
                            </p>
                            <input type="text" id='name' className='py-3 px-5 w-full outline-2 outline-white/30 rounded-lg focus:outline-white/50 transition-all duration-300 ease-in-out text-base placeholder:text-slate-400' placeholder='John Doe' />
                        </label>

                        <label htmlFor="email" className='w-full'>
                            <p className='text-xs text-white/70 font-medium mb-2'>
                                Email
                            </p>
                            <input type="text" id='email' className='py-3 px-5 w-full outline-2 outline-white/30 rounded-lg focus:outline-white/50 transition-all duration-300 ease-in-out text-base placeholder:text-slate-400' placeholder='example@mail.com' />
                        </label>

                        <label htmlFor="query" className='w-full'>

                            <p className='text-xs text-white/70 font-medium mb-2'>
                                Query
                            </p>

                            <textarea name="query" id="query" rows={6} className='py-3 px-5 w-full outline-2 outline-white/30 rounded-lg focus:outline-white/50 transition-all duration-300 ease-in-out text-base placeholder:text-slate-400' placeholder='Your message here'></textarea>

                        </label>

                        <button type='submit' className='border border-white/20 hover:border-blue-500 hover:bg-white hover:text-black px-10 py-2 rounded-xl duration-300 font-semibold'>
                            Submit
                        </button>

                    </form>

                </div>

            </section>
        </>
    )
}

export default Home