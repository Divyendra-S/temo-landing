import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [companyName, setCompanyName] = useState("Temo.AI");
  const [options, setOptions] = useState([
    "Features",
    // "Pricing",
    // "Blog",
    "Changelog",
    // "Careers",
    // "Support",
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let timer: any;
    const animateCompanyName = () => {
      if (isScrolled) {
        setCompanyName((prevName) => prevName.slice(0, -1));
      } else {
        setCompanyName((prevName) =>
          prevName.length === "Temo.AI".length
            ? prevName
            : "Temo.AI".slice(0, prevName.length + 1)
        );
      }
      timer = setTimeout(animateCompanyName, 35);
    };
    animateCompanyName();
    return () => clearTimeout(timer);
  }, [isScrolled]);

  return (
    <motion.div
      className={`flex justify-between items-center mt-[15px] px-6 py-4 h-[56px] bg-background text-foreground text-sm fixed z-[999] ${
        isScrolled ? "shadow-effect rounded-2xl border border-border bg-background " : ""
      }`}
      initial={{ width: "1180px", opacity: 0 }}
      animate={{ width: isScrolled ? "787px" : "1180px", opacity: 1 }}
      transition={{ duration: 0.7, ease: "circInOut" }} // Apply the easing function here
    >
      <motion.div
        className="flex items-center"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Apply the easing function here
      >
        {/* <img src="/logo.png" alt="Logo" className="h-8 mr-2" /> */}
        <div>Temo.AI</div>
        {isScrolled && <div className="h-5 w-px ml-3 bg-border"></div>}
        <motion.span className="text-lg font-bold">
          {companyName.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1, x: 0 }}
              animate={{
                opacity: index < companyName.length ? 1 : 0,
                x: index < companyName.length ? 0 : -100,
              }}
              transition={{ duration: 0.2, delay: index * 0.05 }} // Apply the easing function here
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
        transition={{ duration: 0.7, delay: 0.2 }} // Apply the easing function here
      >
        {options.map((option, index) => (
          <a
            key={option}
            href="#"
            className="text-light-black hover:text-foreground"
          >
            {option}
          </a>
        ))}
      </motion.div>
      <motion.div
        className="flex"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: isScrolled ? 0 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Apply the easing function here
      >
        <button className="bg-transparent text-text-black px-4 py-2 rounded-lg hover:bg-accent">
          Github
        </button>
        {isScrolled && (
          <motion.button
            className=" bg-accent/85 text-text-black h-8 px-2 rounded-lg mt-[2px] "
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: "100%",
              opacity: 0,
              transition: { duration: 0.3, ease: "easeOut" },
            }} // Apply the easing function here
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Github
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
