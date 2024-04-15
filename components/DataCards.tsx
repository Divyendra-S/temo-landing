import Image from "next/image";
import React from "react";
import Chart from "../public/Chart.png";

const DataCards = () => {
  return (
    <div className=" sm:w-[372px] bg-light-gray  flex justify-center items-center flex-col p-[10px] rounded-2xl">
      <div className="">
        <div className=" text-[13px] bg-white leading-4 flex justify-start font-[500] border-b border-border-color  py-[10px] px-[16px] sm:w-[352px] rounded-t-lg ">
          User signups
        </div>
        <Image
          src={Chart}
          alt="chart"
          width={352}
          height={372}
          className="shadow-effect-card rounded-b-lg"
        />
        <div className="py-[14px] pt-6 px-[14px]">
          <p className=" text-[14px] leading-5 text-light-black ">
            <span className=" font-[500] mr-1 "> Line chart. </span>
            Customize line style, axis scale, trend lines, showing values on
            graph, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataCards;
