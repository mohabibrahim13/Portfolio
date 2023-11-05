import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='py-6'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
                </div>
                <p className='text-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi
                    sapiente adipisci iure odit architecto vitae praesentium accusantium deleniti corporis, minus, autem aperiam repellat sed voluptate recusandae officiis dolorum nemo consequuntur aliquid corrupti nesciunt culpa? Ut, reiciendis sint. Saepe iusto
                    officia reprehenderit minima magni amet ipsum vero deserunt veniam rerum.
                </p>
                <br />
                <p className='text-md my-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi
                    sapiente adipisci iure odit architecto vitae praesentium accusantium deleniti corporis, minus, autem aperiam repellat sed voluptate recusandae officiis dolorum nemo consequuntur aliquid corrupti nesciunt culpa? Ut, reiciendis sint. Saepe iusto
                    officia reprehenderit minima magni amet ipsum vero deserunt veniam rerum.
                </p>
            </div>
        </div>
    )
}

export default About