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
                        <div className={`text-5xl py-10 ${myFont.className}`}>
                            <span>{`Our Group's Initiatives`}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-secondary'>
                <div className='max-w-7xl mx-auto '>
                    <div className='grid justify-center text-center relative '>
                        <div className={`text-xl pb-10 px-10 ${techsans.className}`}>
                            <Toprightcorner/>
                            <span>{`Star Group Company is deeply committed to corporate social responsibility (CSR) initiatives. The company actively 
engages in community outreach programs, supporting local charities, and promoting social causes. Their CSR efforts 
include initiatives focused on education, environmental sustainability, and empowerment of marginalized communities. 
They have partnered with educational institutions to provide scholarships and mentorship programs. In terms of 
environmental sustainability, Star Group has implemented eco-friendly practices, such as energy conservation and 
waste reduction. Looking to the future, the company plans to further expand its CSR initiatives, collaborating with 
more organizations and leveraging their resources to make a meaningful and positive impact on society.`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Csr