import React from 'react'
import Image from 'next/image'
import HalfHeroSection from '../public/HalfHeroSection.png'
import HeroSection1 from '../public/HeroSection1.png'

const HeroSection = () => {
  return (
    <div className=''>
    <div className='text-black mt-[70px]'>

        <Image src={HalfHeroSection} alt="HeroSection" width={1217} height={300}/>
        
    </div>
    <div className='ml-2'>
        <Image src={HeroSection1} alt="HeroSection" width={1217} height={300} className=''/>
    </div>
    </div>
  )
}

export default HeroSection