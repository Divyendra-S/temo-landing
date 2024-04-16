import React from "react";
import PerformanceSection from "./PerformanceSection";
import MovingCarousel from "./MovingCarousel";
import Theme from "./Theme";

const EndSection = () => {
  return (
    <div className=" w-[1156px] h-[2112px] py-[136px]  ">
      <PerformanceSection />
      <MovingCarousel />
      <Theme />
    </div>
  );
};

export default EndSection;
