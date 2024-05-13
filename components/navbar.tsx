import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>("Temo.AI");
  const [options, setOptions] = useState<string[]>([
    "Features",
    // "Pricing",
    // "Blog",
    "Changelog",
    // "Careers",
    // "Support",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
    <>
      <DesktopNavbar
        isScrolled={isScrolled}
        companyName={companyName}
        options={options}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <MobileNavbar
        options={options}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};

interface DesktopNavbarProps {
  isScrolled: boolean;
  companyName: string;
  options: string[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  isScrolled,
  companyName,
  options,
  isMenuOpen,
  setIsMenuOpen,
}) => (
  <motion.div
    className={`hidden lg:flex justify-between items-center max-w-[1100px] mt-[15px] px-6 py-4 h-[56px] bg-background text-foreground text-sm fixed z-[999] ${
      isScrolled ? "shadow-effect rounded-2xl border border-border bg-background " : ""
    }`}
    initial={{ width: "1100px", opacity: 0 }}
    animate={{ width: isScrolled ? "787px" : "1100px", opacity: 1 }}
    transition={{ duration: 0.7, ease: "circInOut" }}
  >
    <motion.div
      className="flex items-center"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
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
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="mr-[1px]"
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
    <div className="flex space-x-4 gap-x-3 items-center">
      {options.map((option, index) => (
        <a key={index} href="#" className="text-light-black hover:text-foreground">
          {option}
        </a>
      ))}
    </div>
    <motion.div
      className="flex"
      initial={{ x: 0, opacity: 1 }}
      animate={{ x: isScrolled ? 0 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <ModeToggle />
      {isScrolled && (
        <motion.button
          className=" bg-accent/85 text-text-black h-8 px-2 rounded-lg ml-2 mt-[2px] "
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{
            x: "100%",
            opacity: 0,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          Github
        </motion.button>
      )}
    </motion.div>
  </motion.div>
);

interface MobileNavbarProps {
  options: string[];
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  options,
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
}) => (
  <motion.div
    className={`flex lg:hidden justify-between z-50 items-center mt-[15px] px-6 py-4 h-[56px] bg-background text-foreground text-sm fixed  ${
      isScrolled ? "shadow-effect rounded-2xl border border-border bg-background " : ""
    }`}
    initial={{ width: "100%", opacity: 0 }}
    animate={{ width: isScrolled ? "90%" : "100%", opacity: 1 }}
    transition={{ duration: 0.7, ease: "circInOut" }}
  >
    <div className="text-lg font-bold">Temo</div>
    <div>
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="ml-2">
        <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[999]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {options.map((option, index) => (
            <a
              key={index}
              href="#"
              className="text-light-black hover:text-foreground"
            >
              {option}
            </a>
          ))}
        </div>
        <SheetClose />
      </SheetContent>
    </Sheet>
      <ModeToggle />
      </div>
  </motion.div>
);

export default Navbar;