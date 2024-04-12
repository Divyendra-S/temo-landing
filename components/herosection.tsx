import React from 'react'
import Image from 'next/image'
import HalfHeroSection from '../public/HalfHeroSection.png'
import HeroSection1 from '../public/HeroSection1.png'

const HeroSection = () => {
  return (
    <div className=''>
    <div className='text-black mt-[70px] flex relative justify-center text-center mr-2 '>

        <Image src={HalfHeroSection} alt="HeroSection" width={1217} height={300}/>
        <div className='absolute text-center mt-[85px] text-[64px] leading-[68px] text-heading-black flex flex-col items-center '>
          <div>Data to <span className=' text-orange'>insights</span>  <br/> in minutes </div>
          <p className='  text-light-black mt-3 text-[16px] leading-[24px] '>Explore your data, build you dashboard, <br/> bring your team together.</p>
          <div className="bg-[#37322f]  rounded-[10px] mt-[18px] mb-4 flex text-[#fbfaf9] py-2 pl-3 font-[500] pr-4 shadow-effect-editor-button text-[14px] leading-5 "> Request Access </div></div>
        
    </div>
    <div className='ml-2'>
        <Image src={HeroSection1} alt="HeroSection" width={1217} height={300} className=''/>
    </div>
    </div>
  )
}

export default HeroSection