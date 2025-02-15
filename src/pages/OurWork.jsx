import React from 'react';
import ProjectCard from '../components/ProjectCard';

const OurWork = () => {
    return (
        <section className="min-h-screen max-h-max flex flex-col gap-16 md:gap-24 px-6 md:px-16 lg:px-28 py-16 md:py-24 lg:py-32 bg-[#01100D]">

            <div className="text-2xl sm:text-3xl md:text-4xl text-white md:text-left mt-10">
                Our Work
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    );
};

export default OurWork;