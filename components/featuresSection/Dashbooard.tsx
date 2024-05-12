import React from 'react'
import { ModeToggle } from '../ModeToggle'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import DashboardImage from '../../public/DashboardImage.png'
import Image from 'next/image'

const Dashbooard = () => {
  return (
      <div className='mt-[56px]'>
      {/* <ModeToggle /> */}
      <section className="text-center mt-16 md:mt-18 items-center flex flex-col">
      <a href="/updates/early-adopter">
        <Button variant="outline" className="flex items-center space-x-2 justify-center rounded-full py-1 ">
          <span>Announcing Early Adopters Plan</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </a>
      <h1 className="text-6xl font-medium mt-6">Run your business smarter.</h1>
      <p className="mt-4 md:mt-6 text-foreground/45 max-w-[600px]">
        Midday provides you with greater insight into your business and
        automates the boring tasks, allowing you to focus on what you love to do
        instead.
      </p>
      <div className="mt-8 flex items-center space-x-4">
        <a href="/talk-to-us">
          <Button variant="outline">Talk to us</Button>
        </a>
        <a href="https://app.midday.ai">
          <Button>Get Early Access</Button>
        </a>
      </div>
      <p className="text-xs text-foreground/45 mt-6">No credit card required.</p>
      </section>
      <div className='flex items-center justify-center mt-12 md:mt-14 flex-col'>
        <Image src={DashboardImage} alt="dashboard" width={1030} height={672} className='rounded-lg' />
      </div>
    </div>
  )
}

export default Dashbooard