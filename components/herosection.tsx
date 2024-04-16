import React from "react";
import Image from "next/image";
import bannerBackground from "../public/bannerBackground.png";
import banner from "../public/banner.png";

const HeroSection = () => {
  return (
    <section>
      <div className="text-black mt-[70px] flex relative justify-center text-center mr-2">
        <Image
          src={bannerBackground}
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute text-center flex flex-col items-center py-10">
          <h1 className="hero-heading">
            Your Workflow
            <span className="text-orange"> Automation and Documentation</span>
            <br /> Sidekick
          </h1>
          <p className="hero-subtext text-light-black mt-3">
            Record browser sessions, generate step-by-step guides, and
            streamline your documentation with AI-powered efficiency.
          </p>
          <button className="bg-heading-black rounded-[10px] my-4 flex items-center justify-center text-background-color py-2 px-4 font-medium shadow-effect-editor-button text-[14px] leading-5">
            Download
          </button>
        </div>
      </div>
      <div className="box-shadow-2  mt-[400px] p-4">
        <Image
          src={banner}
          alt="Hero Section"
          width={1217}
          height={350}
          className="box-shadow-4"
        />
      </div>
    </section>
  );
};

export default HeroSection;
