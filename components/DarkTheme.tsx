import React, { useState } from "react";
import Dark from "../public/Dark.png";
import Image from "next/image";

const DarkTheme = ({ setTheme }: any) => {
  const [isOn, setIsOn] = useState<boolean | null>();
  const handleToggle = () => {
    setIsOn(!isOn);
    setTheme("light");
  };
  return (
    <div className=" w-[1156px] h-[572px] pt-[64px] bg-black-background rounded-[20px] flex flex-col items-center ">
      <h3 className=" text-4xl text-white  ">Customize your themes</h3>
      <p className=" text-sm mt-2 text-light-text text-center ">
        {" "}
        Lights on or lights off. It’s your choice. We believe you should find it
        delightful <br />
        to explore and analyze your data.
      </p>
      <div
        onClick={handleToggle}
        className="bg-[#37322f]  rounded-[10px] mt-[26px] mb-4 flex text-[#fbfaf9] py-2 pl-4 font-[500] pr-4 shadow-effect-editor-button text-[14px] leading-5 cursor-default "
      >
        {" "}
        Light Theme{" "}
      </div>
      <Image
        src={Dark}
        alt="light"
        width={1030}
        height={314}
        className="  translate-y-[26px] "
      />
    </div>
  );
};

export default DarkTheme;
