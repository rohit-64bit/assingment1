import React from 'react'
import ProjectCard from '../components/ProjectCard'

const OurWork = () => {
    return (
        <section className='min-h-screen max-h-max flex flex-col gap-24 px-28 py-32 justify-between bg-[#01100D]'>

            <div className='text-4xl text-white'>
                Our Work
            </div>

            <div className='grid grid-cols-3 gap-5'>

                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />

            </div>

        </section>
    )
}

export default OurWork