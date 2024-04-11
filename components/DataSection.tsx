import React from 'react'
import DataCards from './DataCards'
import Chart from '../public/Chart.png'
import chart1 from '../public/chart1.png'
import Chart2 from '../public/Chart2.png'
import Chart3 from '../public/Chart3.png'
import Image from 'next/image'

const DataSection = () => {
    const dataSection = [
        {
            id: 1,
            title: 'User signups',
            imgSrc: Chart,
            description: 'Customize line style, axis scale, trend lines, showing values on graph, and more.',
            name:'Line chart.',
        },
        {
            id: 2,
            title: 'User signups',
            imgSrc: Chart2,
            description: 'Customize line style, axis scale, trend lines, showing values on graph, and more.',
            name:'Line chart.',
        },
        {
            id: 3,
            title: 'User signups',
            imgSrc: Chart3,
            description: 'Customize line style, axis scale, trend lines, showing values on graph, and more.',
            name:'Line chart.',
        },
        {
            id: 4,
            title: 'User signups',
            imgSrc: Chart,
            description: 'Customize line style, axis scale, trend lines, showing values on graph, and more.',
            name:'Line chart.',
        },
        {
            id: 5,
            title: 'User signups',
            imgSrc: Chart2,
            description: 'Customize line style, axis scale, trend lines, showing values on graph, and more.',
            name:'Line chart.',
        },
        {
            id: 6,
            title: 'User signups',
            imgSrc: Chart,
            description: 'Customize line style, axis scale, trend lines, showing values on graph, and more.',
            name:'Line chart.',
        },
    ]
  return (
    <section className=' py-[136px] w-[1168px] flex flex-col items-center ' >
        <div className='mb-[54px]  sm:h-[192px]  text-center ' >
            <h2 className=' text-heading-black text-[48px] leading-[52px] text-center ' >
                Visualize data <br /> with powerful charts
            </h2>
            <p className=' text-text-black text-[16px] leading-6 mt-2 text-center  '>
                Visulaize your data in a variety of ways thanks to a roubust set of visualizations. <br />

                
                Whether it's as a table. a chart, or a single value -- you're in control.
            </p>
        </div>
        <div className=' flex flex-wrap gap-5 sm:w-[1168px] justify-center '>
            
            {dataSection.map((item)=> (
                <div key={item.id} className=' sm:w-[372px] bg-light-gray  flex justify-center items-center flex-col p-[10px] rounded-2xl' >
                <div className=''>
                <div className=' text-[13px] bg-white leading-4 flex justify-start font-[500] border-b border-border-color  py-[10px] px-[16px] sm:w-[352px] rounded-t-lg '>
                    {item.title}
                </div>
                <Image src={item.imgSrc} alt='chart' width={352} height={372} className='shadow-effect-card rounded-b-lg' />
                <div className='py-[14px] pt-6 px-[14px]' >
                
                <p className=' text-[14px] leading-5 text-light-black '>
                <span className=' font-[500] mr-1 ' > {item.name} </span>
                {item.description}
                </p>
                </div>
                </div>
            </div>
            ))}
            
        </div>
    </section>
  )
}

export default DataSection
