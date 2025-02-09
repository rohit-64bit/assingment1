import { FaChartBar } from "react-icons/fa6";
import { TbPlugConnected } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import { IoCodeWorking } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { MdFolderZip } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaUserCheck, FaClipboardList, FaCode, FaServer, FaRocket } from "react-icons/fa";
import img1 from '../assets/partners/image 1.png'
import img2 from '../assets/partners/image 2.png'
import img3 from '../assets/partners/image 3.png'
import img4 from '../assets/partners/image 4.png'
import img5 from '../assets/partners/image 5.png'
import img6 from '../assets/partners/image 6.png'
import img7 from '../assets/partners/image 7.png'
import img8 from '../assets/partners/image 8.png'
import img9 from '../assets/partners/image 9.png'
import img10 from '../assets/partners/image 10.png'
import img11 from '../assets/partners/image 11.png'
import img12 from '../assets/partners/image 12.png'
import img13 from '../assets/partners/image 13.png'
import img14 from '../assets/partners/image 14.png'
import img15 from '../assets/partners/image 15.png'

export const navRoutes = [
    {
        name: 'Home',
        link: '/#home',
        isHashLink: true
    },
    {
        name: 'About Us',
        link: '/#about',
        isHashLink: true
    },
    {
        name: 'Services',
        link: '/#services',
        isHashLink: true
    },
    {
        name: 'Why Us',
        link: '/#testimonials',
        isHashLink: true
    },
    {
        name: 'Contact Us',
        link: '/#contact',
        isHashLink: true
    }
]

export const serviceData = [
    {
        title: 'Data Analytics',
        description: 'We provide data analytics services to help you make informed decisions.',
        icon: FaChartBar
    },
    {
        title: 'API Integration',
        description: 'We provide API integration services to help you connect your applications.',
        icon: TbPlugConnected
    },
    {
        title: 'Security',
        description: 'We provide security services to help you secure your applications.',
        icon: GrSecure
    },
    {
        title: 'Software Development',
        description: 'We provide software development services to help you build your applications.',
        icon: IoCodeWorking
    },
    {
        title: 'Marketing',
        description: 'We provide marketing services to help you promote your applications.',
        icon: HiSpeakerphone
    },
    {
        title: 'Deployment',
        description: 'We provide deployment services to help you deploy your applications.',
        icon: MdFolderZip
    }
]

export const testimonialData = [
    {
        "name": "John Davis",
        "position": "Software Engineer",
        "testimonial": "ByteDev has been a game-changer for my career. Their one-on-one live classes gave me the skills and confidence to transition into software development smoothly. Highly recommend!",
        "date": "15 March 2023"
    },
    {
        "name": "Aditi Sharma",
        "position": "Web Developer",
        "testimonial": "The courses at ByteDev are practical and industry-focused. The instructors are knowledgeable and helped me master the latest web development frameworks. Great experience!",
        "date": "3 April 2023"
    },
    {
        "name": "Michael Lee",
        "position": "Data Analyst",
        "testimonial": "ByteDev's IT consultancy service provided my team with the insights needed to optimize our data management processes. Their expertise saved us valuable time and resources.",
        "date": "12 February 2023"
    },
    {
        "name": "Neha Raj",
        "position": "Project Manager",
        "testimonial": "With ByteDev's support, we successfully implemented a new software system that streamlined our project workflows. Their development team is very skilled and responsive.",
        "date": "25 January 2023"
    },
    {
        "name": "David Johnson",
        "position": "Full Stack Developer",
        "testimonial": "ByteDev's courses are well-structured and cover essential skills. The hands-on projects helped me build a strong portfolio that got me noticed by employers. Excellent training!",
        "date": "8 May 2023"
    },
    {
        "name": "Priya Kapoor",
        "position": "IT Consultant",
        "testimonial": "ByteDev's one-on-one sessions were incredibly helpful for mastering advanced IT concepts. The team’s guidance has been instrumental in advancing my career.",
        "date": "18 July 2023"
    }
]

export const socialMediaLinks = [
    {
        icon: FaFacebookF,
        link: 'https://www.facebook.com'
    },
    {
        icon: FaInstagram,
        link: 'https://www.instagram.com'
    },
    {
        icon: FaXTwitter,
        link: 'https://www.twitter.com'
    },
    {
        icon: FaLinkedinIn,
        link: 'https://www.linkedin.com'
    },
    {
        icon: FaYoutube,
        link: 'https://www.youtube.com'
    }
]

export const partnersData = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
]

export const footerLinks = [
    {
        title: 'Home',
        links: [
            {
                name: 'About Us',
                link: '/#about'
            },
            {
                name: 'Services',
                link: '/#services'
            },
            {
                name: 'Why Us',
                link: '/#testimonials'
            },
            {
                name: 'Contact Us',
                link: '/#contact'
            }
        ]
    },
    {
        title: 'Services',
        links: [
            {
                name: 'Data Analytics',
                link: '/#services'
            },
            {
                name: 'API Integration',
                link: '/#services'
            },
            {
                name: 'Security',
                link: '/#services'
            },
            {
                name: 'Software Development',
                link: '/#services'
            },
            {
                name: 'Marketing',
                link: '/#services'
            },
            {
                name: 'Deployment',
                link: '/#services'
            }
        ]
    },
    {
        title: 'Contact Us',
        links: [
            {
                name: 'Email',
                link: 'mailto:'
            },
            {
                name: 'Phone',
                link: 'tel:'
            },
            {
                name: 'Address',
                link: 'https://www.google.com/maps/search/'
            }
        ]
    }
]

export const onboardingSteps = [
    { title: "Initial Contact", description: "Understanding client needs & project requirements.", date: "Step 1", icon: <FaUserCheck /> },
    { title: "Proposal & Agreement", description: "Presenting a proposal, finalizing budget, and signing the agreement.", date: "Step 2", icon: <FaClipboardList /> },
    { title: "Development Phase", description: "Design, development, and client feedback iterations.", date: "Step 3", icon: <FaCode /> },
    { title: "Testing & Deployment", description: "QA testing, client approval, and live deployment.", date: "Step 4", icon: <FaServer /> },
    { title: "Project Handover & Support", description: "Final documentation, training, and ongoing support.", date: "Step 5", icon: <FaRocket /> },
];