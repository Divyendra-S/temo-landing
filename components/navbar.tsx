import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [companyName, setCompanyName] = useState('Index');
  const [options, setOptions] = useState(['Features', 'Pricing', 'Blog', 'Changelog', 'Careers', 'Support']);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let timer: any;
    const animateCompanyName = () => {
      if (isScrolled) {
        setCompanyName((prevName) => prevName.slice(0, -1));
      } else {
        setCompanyName((prevName) => (prevName.length === 'Index'.length ? prevName : 'Index'.slice(0, prevName.length + 1)));
      }
      timer = setTimeout(animateCompanyName, 35);
    };
    animateCompanyName();
    return () => clearTimeout(timer);
  }, [isScrolled]);

  return (
    <motion.div
      className={`flex justify-between items-center px-6 py-4 h-[56px] bg-white text-black text-sm fixed z-[999] ${
        isScrolled ? 'shadow-effect rounded-2xl' : ''
      }`}
      initial={{ width: '100%', opacity: 0 }}
      animate={{ width: isScrolled ? '787px' : '1180px', opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }} // Apply the easing function here
    >
      <motion.div
        className="flex items-center"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }} // Apply the easing function here
      >
        {/* <img src="/logo.png" alt="Logo" className="h-8 mr-2" /> */}
        <div>logo</div>
        {isScrolled && <div className="h-5 w-px ml-3 bg-gray-300"></div>}
        <motion.span className="text-lg font-bold">
          {companyName.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: index < companyName.length ? 1 : 0, x: index < companyName.length ? 0 : -100 }}
              transition={{ duration: 0.2, delay: index * 0.05, ease: 'easeInOut' }} // Apply the easing function here
              className="mr-[1px]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
      <motion.div
        className="flex space-x-4 gap-x-3 items-center"
        initial={{ x: 0 }}
        animate={{ x: isScrolled ? -10 : 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }} // Apply the easing function here
      >
        {options.map((option, index) => (
          <a key={option} href="#" className="text-[#605a57] hover:text-gray-800">
            {option}
          </a>
        ))}
      </motion.div>
      <motion.div
        className="flex"
        initial={{ opacity: 0 }}
        animate={{ x: isScrolled ? 0 : 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }} // Apply the easing function here
      >
        <button className="bg-transparent text-[#4a4340] px-4 py-2 rounded-lg hover:bg-blue-100">Log In</button>
        {isScrolled && (
          <motion.button
            className=" shadow-effect-button text-[#4a4340] h-8 px-2 rounded-lg mt-[2px] ml-1"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }} // Apply the easing function here
          >
            Sign Up
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
