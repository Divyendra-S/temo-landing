import React from "react";
import Focus from "../public/Focus.png";
import Image from "next/image";
import Analyze from "../public/Analyze.png";

const PerformanceSection = () => {
  return (
    <div className=" flex flex-col items-center ">
      <div className=" w-[486px] h-[140px] mb-[34px] text-center">
        <h2 className=" text-[48px] leading-[52px] text-heading-black ">
          Streamlined for you
        </h2>
        <p className=" text-[16px] leading-[24px] mt-[8px] text-text-black ">
          Delightfully crafeted to help you stay in folew and focus on what{" "}
          <br /> you care about - leveraging your data.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-5 mb-5 ">
        <div className="w-[568px] h-[552px] bg-black-background rounded-[22px] ">
          <div className=" h-[228px] p-12 mb-4  ">
            <div className="mb-4 badge flex items-center justify-center py-1 px-2 w-[150px] h-6 rounded-full text-xs ">
              Performance focus
            </div>
            <h3 className=" text-[36px] leading-[40px] text-background-color ">
              Built for speed
            </h3>
            <p className=" text-sm mt-3  text-light-text ">
              Stay in flow and get to insights faster with iteractions <br />{" "}
              taht feel instantaneous thanks to smart syncing.
            </p>
          </div>
          <Image
            src={Focus}
            alt="focus"
            width={567}
            height={308}
            className=" rounded-b-[22px] "
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-1 gap-5 mb-5 ">
          <div className="w-[568px] h-[552px] bg-black-background rounded-[22px] ">
            <div className=" h-[228px] p-12 mb-4  ">
              <div className="mb-4 badge flex items-center justify-center py-1 px-2 w-[150px] h-6 rounded-full text-xs ">
                Analyze together
              </div>
              <h3 className=" text-[36px] leading-[40px] text-background-color ">
                Collaborate in real time
              </h3>
              <p className=" text-sm mt-3  text-[#aba8a6] ">
                Stay in flow and get to insights faster with iteractions <br />{" "}
                taht feel instantaneous thanks to smart syncing.
              </p>
            </div>
            <Image
              src={Analyze}
              alt="focus"
              width={567}
              height={308}
              className=" rounded-b-[22px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
