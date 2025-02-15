import React from 'react'
import { Link } from 'react-router-dom'
import { MdAppShortcut } from "react-icons/md";
import { LuAppWindow } from "react-icons/lu";
import SlideInFromBottom from './animations/SlideInFromBottom';

const ProjectCard = () => {
    return (
        <SlideInFromBottom className='w-full relative rounded-xl flex flex-col gap-5 justify-between duration-500 transition-all ease-in-out'>

            <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full aspect-video object-cover bg-black rounded-xl' alt="" />

            <a href="/" target='_blank' className='absolute inset-0 rounded-xl opacity-0 hover:opacity-100 duration-300 transition-all ease-in-out flex flex-col gap-5 p-10 bg-black/50 backdrop-blur-md border border-white/20 justify-between'>

                <div className='flex items-center gap-5'>

                    <div className='w-max bg-[#09534B] rounded-xl flex flex-col gap-5 p-5'>
                        <LuAppWindow className='text-3xl text-[#E8BF6A]' />
                    </div>

                    <div className='text-4xl text-white'>
                        Project Name
                    </div>

                </div>

                <p className='text-white/70 text-sm'>
                    Project Description
                </p>

            </a>

        </SlideInFromBottom>
    )
}

export default ProjectCard