import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <section className='h-screen flex items-center justify-center bg-black/90'>

                <div className='flex flex-col gap-3 items-center'>

                    <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-700 via-white to-blue-700 bg-clip-text text-transparent'>
                        404 Not Found
                    </h1>

                    <Link to='/' className='text-white underline w-max'>
                        Go back to Home Page
                    </Link>

                </div>

            </section>
        </>
    )
}

export default NotFound