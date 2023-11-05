import React from 'react'
import Weekaway from '../assets/weekaway.png'
import Besteats from '../assets/besteats.jpg'
const Portoflio = () => {
    const portoflios = [
        {
            id: 1,
            src: Weekaway,
            demoLink: "https://weekaway.surge.sh/",
            codeLink: "https://github.com/mohabibrahim13/trial-weekaway"
        },
        {
            id: 2,
            src: Besteats,
            demoLink: "https://best_eat.surge.sh/",
            codeLink: "https://github.com/mohabibrahim13/BestEats-Trial"
        },
    ]

    const handleDemoClick = (demoLink) => {
        window.open(demoLink, "_blank");
    };

    const handleCodeClick = (codeLink) => {
        window.open(codeLink, "_blank");
    };

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work</p>
                </div>
                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portoflios.map(({ id, src, demoLink, codeLink }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button onClick={() => handleDemoClick(demoLink)} className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button onClick={() => handleCodeClick(codeLink)} className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))
                }
                </div>

            </div>
        </div>
    )
}

export default Portoflio