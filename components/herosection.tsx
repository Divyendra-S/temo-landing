import React from "react";
import Image from "next/image";
import HalfHeroSection from "../public/HalfHeroSection.png";
import HeroSection1 from "../public/HeroSection1.png";

const HeroSection = () => {
  return (
    <div className="">
      <div className="text-black mt-[70px] flex relative justify-center text-center mr-2 ">
        <Image
          src={HalfHeroSection}
          alt="HeroSection"
          width={1217}
          height={300}
        />
        <div className="absolute text-center mt-[85px] text-[64px] leading-[68px] text-heading-black flex flex-col items-center ">
          <div>
            Your Workflow
            <span className=" text-orange">
              Automation and Documentation
            </span>{" "}
            <br /> Sidekick{" "}
          </div>
          <p className="  text-light-black mt-3 text-[16px] leading-[24px] ">
            Record browser sessions, generate step-by-step guides, and <br />{" "}
            streamline your documentation with AI-powered efficiency.
          </p>
          <div className="bg-heading-black  rounded-[10px] mt-[18px] mb-4 flex text-background-color py-2 pl-3 font-[500] pr-4 shadow-effect-editor-button text-[14px] leading-5 ">
            {" "}
            Download
          </div>
        </div>
      </div>
      <div className="ml-2">
        <Image
          src={HeroSection1}
          alt="HeroSection"
          width={1217}
          height={300}
          className=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
