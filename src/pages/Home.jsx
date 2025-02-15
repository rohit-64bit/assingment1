import React, { useState } from 'react'
import ServiceDetails from '../components/ServiceDetails'
import { contactInfo, partnersData, serviceData, socialMediaLinks, stats, teamData } from '../services/Constants'
import AboutImg from "../assets/aboutimg.png"
import HeroBg from "../assets/herobg.svg"
import ClientOnboardingTimeline from './../components/ClientOnboardingTimeline';
import TestimonialCard from '../components/TestimonialCard'
import { HashLink } from 'react-router-hash-link'
import PartnersSlider from '../components/PartnersSlider'
import { fetchTestimonialSheetData } from '../apis/TestimonialApis'
import { useQuery } from '@tanstack/react-query'
import { CONTACT_DEPLOYMENT_LINK } from '../services/Helpers'
import { RiArrowRightLine, RiPlayLargeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import AnimatedTeam from '../components/AnimatedTeam'
import ProjectCard from '../components/ProjectCard'
import SlideInFromBottom from '../components/animations/SlideInFromBottom'

const Home = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        query: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const { data: testimonialData, isLoading, error } = useQuery({
        queryKey: ["testimonialData"],
        queryFn: fetchTestimonialSheetData,
    });

    const insertContactData = async (e) => {

        e.preventDefault()

        const response = await fetch("http://localhost:8000/insert", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        console.log(result);

    }

    return (
        <>
            {/* Hero Section */}
            <section id='home' className='relative min-h-screen flex items-center justify-center bg-[#01100D] pt-20 px-6 md:px-16 lg:px-28'>

                <div className='text-center flex flex-col items-center justify-center gap-4 z-10'>
                    {/* Tagline */}
                    <SlideInFromBottom className='flex items-center justify-center border border-white/50 mb-5 px-4 md:px-5 py-2 w-max text-xs md:text-sm text-white rounded-full bg-black'>
                        <div className='p-1 rounded-full w-3 h-3 md:w-4 md:h-4 bg-green-600 animate-pulse mr-2'></div>
                        Innovative IT Consulting for Business Growth
                    </SlideInFromBottom>

                    {/* Headline for Small to Medium Devices */}
                    <div className="block lg:hidden">
                        <SlideInFromBottom className="tracking-wider text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-[#E8BF6A] bg-clip-text text-transparent">
                            "Techsectra: Your Partner in IT Excellence"
                        </SlideInFromBottom>
                    </div>

                    {/* Headline for Large and Above Devices */}
                    <div className="hidden lg:block">
                        <SlideInFromBottom className="tracking-wider text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white to-[#E8BF6A] bg-clip-text text-transparent">
                            "Techsectra: Your
                        </SlideInFromBottom>

                        <SlideInFromBottom className="tracking-wider text-5xl lg:text-6xl font-bold bg-white bg-clip-text text-transparent">
                            Partner in IT Excellence"
                        </SlideInFromBottom>
                    </div>


                    {/* Description */}
                    <SlideInFromBottom className='text-center text-sm md:text-lg text-gray-300 max-w-xl md:max-w-2xl lg:max-w-3xl py-4'>
                        At Techsectra, we bridge the gap between business needs and cutting-edge technology. Our concierge service, powered by dedicated tech leads, sets us apart—ensuring seamless integration, continuous support, and optimized performance of your IT resources.
                    </SlideInFromBottom>

                    {/* CTA Buttons */}
                    <SlideInFromBottom className='flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-5'>
                        <a
                            href="/get-started"
                            className="w-max py-2 px-8 md:py-3 md:px-12 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg hover:border-[#E8BF6A] hover:bg-white hover:text-black duration-300 font-semibold group flex items-center justify-center gap-2"
                        >
                            Book a Call
                            <RiArrowRightLine
                                fontSize={20}
                                className='transform duration-300 group-hover:translate-x-2'
                            />
                        </a>

                        <Link
                            to="/our-work"
                            className="w-max py-2 px-8 md:py-3 md:px-12 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg hover:border-gray-500 hover:bg-white/30 duration-300 font-semibold group flex items-center justify-center gap-2"
                        >
                            Our Work
                            <RiPlayLargeLine
                                fontSize={20}
                                className='transform duration-300 group-hover:scale-125'
                            />
                        </Link>
                    </SlideInFromBottom>
                </div>

                {/* Background Image */}
                <div className="absolute inset-0 -z-0 flex justify-center items-center opacity-70">
                    <img src={HeroBg} alt="Background" className='w-full h-full object-cover' />
                </div>

            </section>


            <section id='about' className='min-h-screen max-h-max flex flex-col gap-24 px-6 md:px-16 lg:px-28 py-16 md:py-24 lg:py-32 items-center bg-[#01100D]'>

                <div className='grid grid-cols-1 gap-5 w-full'>
                    {/* About Us & Image/Stats Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

                        {/* About Us */}
                        <SlideInFromBottom className='bg-white/5 rounded-2xl p-6 md:p-10 flex flex-col gap-5 justify-between duration-500 transition-all ease-in-out'>
                            <div className='text-3xl md:text-4xl text-white'>About Us</div>
                            <p className='text-white text-base md:text-lg'>
                                Techsectra is an IT consulting firm focused on providing businesses with tailored technology solutions and highly skilled IT professionals. We work with clients to scale their teams, navigate complex IT challenges, and deliver high-impact solutions—all with an emphasis on hands-on, proactive support through our Concierge Tech Service.
                            </p>
                        </SlideInFromBottom>

                        {/* Image & Stats Section */}
                        <SlideInFromBottom className='grid grid-cols-1 gap-5'>

                            <img
                                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="About Techsectra"
                                className='rounded-2xl h-80 md:h-96 w-full object-cover'
                            />

                            <SlideInFromBottom className='bg-gradient-to-br from-[#0D2D26] to-[#06150E] rounded-2xl p-6 md:p-10 gap-5 md:gap-10 grid grid-cols-1 md:grid-cols-2 justify-between duration-500 transition-all ease-in-out'>
                                {stats.map((stat, index) => (
                                    <div key={index} className='flex flex-col gap-2'>
                                        <div className='text-3xl font-medium text-[#E8BF6A]'>{stat.number}</div>
                                        <div className='text-white'>{stat.label}</div>
                                    </div>
                                ))}
                            </SlideInFromBottom>

                        </SlideInFromBottom>

                    </div>

                    {/* Who We Are & What Sets Us Apart */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                        <SlideInFromBottom className='bg-white/5 rounded-2xl p-6 md:p-10 flex flex-col gap-5 md:gap-10 justify-between duration-500 transition-all ease-in-out'>
                            <div className='text-2xl md:text-3xl text-white'>Who we are</div>
                            <p className='text-white/70 text-base md:text-lg'>
                                Techsectra is an IT consulting firm focused on providing businesses with tailored technology solutions and highly skilled IT professionals. We work with clients to scale their teams, navigate complex IT challenges, and deliver high-impact solutions—all with an emphasis on hands-on, proactive support through our Concierge Tech Service.
                            </p>
                        </SlideInFromBottom>

                        <SlideInFromBottom className='bg-white/5 rounded-2xl p-6 md:p-10 flex flex-col gap-5 md:gap-10 justify-between duration-500 transition-all ease-in-out'>
                            <div className='text-2xl md:text-3xl text-white'>What sets us apart?</div>
                            <p className='text-white/70 text-base md:text-lg'>
                                Our unique concierge model offers more than just talent—we offer dedicated, continuous tech leadership. Each of our clients is assigned a tech lead who ensures that the professionals on your team are always performing at their best and seamlessly integrate with your workflows. It’s this high-touch service that makes Techsectra stand out in a competitive landscape.
                            </p>
                        </SlideInFromBottom>
                    </div>

                </div>
            </section>


            <section className='min-h-screen flex flex-col gap-16 px-6 md:px-16 lg:px-28 py-16 md:py-24 lg:py-32 items-center justify-between bg-[#01100D]'>

                {/* Section Header */}
                <div className="flex flex-col items-center gap-4">
                    {/* Tagline */}
                    <SlideInFromBottom className='flex items-center justify-center border border-white/50 mb-4 px-4 md:px-5 py-2 w-max text-xs md:text-sm text-white rounded-full bg-black'>
                        <div className='p-1 rounded-full w-3 h-3 bg-green-600 animate-pulse mr-2'></div>
                        Our Team
                    </SlideInFromBottom>

                    {/* Title */}
                    <SlideInFromBottom className='text-2xl md:text-3xl lg:text-4xl text-white font-bold'>
                        Meet Our Team of Experts.
                    </SlideInFromBottom>
                </div>

                {/* Team Section */}
                <AnimatedTeam teams={teamData} />
            </section>

            {/* Services Section */}
            <section
                id="services"
                className="min-h-screen max-h-max flex flex-col gap-16 md:gap-24 px-6 md:px-16 lg:px-28 py-16 md:py-24 lg:py-32 items-center justify-between bg-[#01100D]"
            >
                <div className="flex flex-col items-center gap-4">
                    <SlideInFromBottom className="flex items-center justify-center border border-white/50 mb-5 px-5 py-2 w-max text-sm text-white rounded-full bg-black">
                        <div className="p-1 rounded-full w-max h-max bg-green-600 animate-pulse mr-2" />
                        Our Services
                    </SlideInFromBottom>

                    <SlideInFromBottom className="text-2xl sm:text-3xl md:text-4xl text-white text-center">
                        Overcome technology hurdles with expert IT solutions.
                    </SlideInFromBottom>
                </div>

                <SlideInFromBottom className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {serviceData.map((data, index) => {
                        return <ServiceDetails key={index} data={data} />;
                    })}
                </SlideInFromBottom>
            </section>


            {/* Our Work Section */}
            <section
                className="min-h-screen max-h-max flex flex-col gap-16 md:gap-24 px-6 md:px-16 lg:px-28 py-16 md:py-24 lg:py-32 items-center justify-between bg-[#01100D]"
            >
                <div className="flex flex-col items-center gap-4">
                    <SlideInFromBottom className="flex items-center justify-center border border-white/50 mb-5 px-5 py-2 w-max text-sm text-white rounded-full bg-black">
                        <div className="p-1 rounded-full w-max h-max bg-green-600 animate-pulse mr-2" />
                        Our Works
                    </SlideInFromBottom>

                    <SlideInFromBottom className="text-2xl sm:text-3xl md:text-4xl text-white text-center">
                        Explore our recent works and projects.
                    </SlideInFromBottom>
                </div>

                <SlideInFromBottom className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </SlideInFromBottom>

                <Link
                    to="/our-work"
                    className="w-max py-3 px-12 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg hover:border-[#E8BF6A] hover:bg-white hover:text-black duration-300 font-semibold group flex items-center justify-center gap-2"
                >
                    View More
                    <RiArrowRightLine
                        fontSize={25}
                        className="transform duration-300 group-hover:translate-x-2"
                    />
                </Link>
            </section>

            {/* Testimonials Section */}
            <section
                id="testimonials"
                className="min-h-screen max-h-max flex flex-col gap-16 md:gap-24 px-6 md:px-16 lg:px-28 py-16 md:py-24 lg:py-32 items-center justify-between bg-[#01100D]"
            >
                <div className="flex flex-col items-center gap-4">
                    <SlideInFromBottom className="flex items-center justify-center border border-white/50 mb-5 px-5 py-2 w-max text-sm text-white rounded-full bg-black">
                        <div className="p-1 rounded-full w-max h-max bg-green-600 animate-pulse mr-2" />
                        Testimonials
                    </SlideInFromBottom>

                    <SlideInFromBottom className="text-2xl sm:text-3xl md:text-4xl text-white text-center">
                        What Our Clients Say About Us
                    </SlideInFromBottom>
                </div>

                <SlideInFromBottom className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {testimonialData?.map((data, index) => (
                        <TestimonialCard key={index} data={data} />
                    ))}
                </SlideInFromBottom>
            </section>


            {/* Get Started Section */}
            <section
                id="get-started"
                className="min-h-screen max-h-max flex flex-col gap-16 md:gap-24 px-6 md:px-16 lg:px-28 py-16 md:py-24 lg:py-32 items-center justify-between bg-[#01100D]"
            >
                <div className="flex flex-col items-center gap-4">
                    <SlideInFromBottom className="flex items-center justify-center border border-white/50 mb-5 px-5 py-2 w-max text-sm text-white rounded-full bg-black">
                        <div className="p-1 rounded-full w-max h-max bg-green-600 animate-pulse mr-2" />
                        Get Started
                    </SlideInFromBottom>

                    <SlideInFromBottom className="text-2xl sm:text-3xl md:text-4xl text-white text-center">
                        Start Your Journey With Us
                    </SlideInFromBottom>
                </div>

                <ClientOnboardingTimeline />

                <a
                    href="/get-started"
                    className="w-max py-3 px-8 sm:px-10 md:px-12 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg hover:border-[#E8BF6A] hover:bg-white hover:text-black duration-300 font-semibold group flex items-center justify-center gap-2"
                >
                    Book a Call
                    <RiArrowRightLine
                        fontSize={25}
                        className="transform duration-300 group-hover:translate-x-2"
                    />
                </a>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="min-h-screen max-h-max flex flex-col gap-16 md:gap-24 px-6 md:px-16 lg:px-28 py-16 md:py-24 lg:py-32 items-center bg-[#01100D]"
            >
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center border border-white/50 mb-5 px-5 py-2 w-max text-sm text-white rounded-full bg-black">
                        <div className="p-1 rounded-full w-max h-max bg-green-600 animate-pulse mr-2" />
                        Let's Connect
                    </div>

                    <div className="text-2xl sm:text-3xl md:text-4xl text-white text-center">
                        Transform your Business
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
                    <div className="w-full lg:w-1/2 flex flex-col gap-10">
                        {/* Contact Information */}
                        <div className="flex flex-col gap-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex gap-4 items-center">
                                    <div className="w-max bg-[#09534B] rounded-xl shadow-lg p-4">
                                        <info.icon className="text-xl text-[#E8BF6A]" />
                                    </div>
                                    <div>
                                        <p className="text-lg text-white">{info.name}</p>
                                        <a
                                            href={info.link}
                                            className="text-white/70 hover:text-[#E8BF6A] duration-300"
                                        >
                                            {info.desk}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Media Links */}
                        <div className="flex flex-col gap-4">
                            <p className="text-white/70 text-lg sm:text-xl">
                                Follow us on social media for updates and news.
                            </p>
                            <div className="flex gap-4">
                                {socialMediaLinks.map((link, index) => (
                                    <a
                                        href={link.link}
                                        key={index}
                                        target="_blank"
                                        className="hover:scale-105 duration-300 w-max bg-[#09534B] rounded-xl shadow-lg p-4"
                                    >
                                        <link.icon className="text-2xl text-[#E8BF6A]" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <SlideInFromBottom className="w-full lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/20 p-8 md:p-10 text-white rounded-xl shadow-lg">
                        <form
                            onSubmit={insertContactData}
                            method="POST"
                            className="flex flex-col gap-6"
                        >
                            <p className="text-white/70 text-sm">
                                Fill out the form below and we will get back to you as soon as
                                possible.
                            </p>

                            <label htmlFor="name" className="w-full">
                                <p className="text-xs text-white/70 font-medium mb-2">Name</p>
                                <input
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    id="name"
                                    className="py-3 px-5 w-full outline-2 outline-white/30 rounded-lg focus:outline-white/50 transition-all duration-300 text-base placeholder:text-slate-400"
                                    placeholder="John Doe"
                                />
                            </label>

                            <label htmlFor="email" className="w-full">
                                <p className="text-xs text-white/70 font-medium mb-2">Email</p>
                                <input
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    id="email"
                                    className="py-3 px-5 w-full outline-2 outline-white/30 rounded-lg focus:outline-white/50 transition-all duration-300 text-base placeholder:text-slate-400"
                                    placeholder="example@mail.com"
                                />
                            </label>

                            <label htmlFor="query" className="w-full">
                                <p className="text-xs text-white/70 font-medium mb-2">Query</p>
                                <textarea
                                    value={formData.query}
                                    onChange={handleChange}
                                    id="query"
                                    rows={6}
                                    className="py-3 px-5 w-full outline-2 outline-white/30 rounded-lg focus:outline-white/50 transition-all duration-300 text-base placeholder:text-slate-400"
                                    placeholder="Your message here"
                                />
                            </label>

                            <button
                                type="submit"
                                className="border border-white/20 hover:border-green-400 hover:bg-white hover:text-black px-10 py-3 rounded-xl duration-300 font-semibold"
                            >
                                Submit
                            </button>
                        </form>
                    </SlideInFromBottom>
                </div>
            </section>

        </>
    )
}

export default Home