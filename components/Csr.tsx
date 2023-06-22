import localFont from 'next/font/local'
import React from 'react'
import Toprightcorner from './reusable/Toprightcorner'
const myFont = localFont({ src: '../public/nimbussandext.ttf' })
const techsans = localFont({ src: '../public/Technique+Sans.otf', weight: "400" },)
const Csr = () => {
    return (
        <div className=''>
            <div className='bg-secondary'>
                <div className='max-w-7xl mx-auto '>
                    <div className='grid justify-center text-center   '>
                        <div className={`text-4xl lg:text-5xl py-5 lg:py-10 ${myFont.className}`}>
                            <span>{`Our Group's Initiatives`}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-secondary'>
                <div className='max-w-6xl mx-auto '>
                    <div className='grid justify-center text-center relative '>
                        <div className={`text-sm lg:text-xl pb-10  px-5 ${techsans.className}`}>
                            <Toprightcorner />
                            <span className='z-10'>{`At Star Group, we believe that our business is about much more than profits - it's about making a positive impact on the world around us. Driven by the idea that true happiness comes from giving without expecting anything in return, we've started several socially responsible initiatives.`}</span>
                            <p className='py-3'>{`One of our key programs is the Hunger Fund. This endeavor is dedicated to ensuring that no member of our expansive 200+ team ever has to face the plight of hunger. During times of need, this fund steps in to provide assistance for food, offering a safety net for our valued employees. Our vision now is to expand this support to encompass not only our employees but their families`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Csr