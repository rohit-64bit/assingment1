import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <section className='h-screen flex items-center justify-center bg-[#01100D]'>

                <div className='flex flex-col gap-3 items-center'>

                    <div className="flex flex-col items-center gap2">

                        <div className='flex items-center justify-center border border-white/50 mb-5 px-5 py-2 w-max text-sm text-white rounded-full bg-black '>

                            <div className='p-1 rounded-full w-max h-max bg-green-600 animate-pulse mr-2 ' />

                            Error : 404

                        </div>

                        <div className='text-4xl text-white'>
                            Opps! Page Not Found
                        </div>

                    </div>

                    <Link to='/' className='text-white underline w-max'>
                        Go back to Home Page
                    </Link>

                </div>

            </section>
        </>
    )
}

export default NotFound