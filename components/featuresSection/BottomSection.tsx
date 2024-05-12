import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

interface Props {}

const BottomSection: React.FC<Props> = () => {
  return (
    <div className="border border-border rounded-2xl text-center px-10 py-14 mx-4 md:mx-auto md:px-24 md:py-20 mb-32 mt-24 flex items-center flex-col bg-[#121212]">
      <span className="text-6xl md:text-8xl font-medium text-white">Stress free by midday.</span>
      <p className="text-[#878787] mt-6">
        Midday provides you with greater insight into your business and
        <br /> automates the boring tasks, allowing you to focus on what you love to do instead.
      </p>
      <div className="mt-8 flex items-center space-x-4">
        <Link href="/talk-to-us">
          <Button variant="outline">Talk to us</Button>
        </Link>
        <Link href="https://temo.ai">
          <Button>Get Early Access</Button>
        </Link>
      </div>
    </div>
  );
};

interface ButtonProps {
  href: string;
  text: string;
}

const CustomButton: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <a href={href}>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:bg-accent hover:text-accent-foreground py-2 border h-12 px-6 border-white text-white  md:block">
        {text}
      </button>
    </a>
  );
};

export default BottomSection;
