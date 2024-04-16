import React from "react";

import Chart from "../public/Chart.png";

import Chart2 from "../public/Chart2.png";
import Chart3 from "../public/Chart3.png";
import Image from "next/image";

const DataSection = () => {
  const dataSection = [
    {
      id: 1,
      title: "Seamless Session Recording",
      imgSrc: Chart,
      description:
        "Capture every click, scroll, and interaction with high-fidelity",
      name: "Session Recording.",
    },
    {
      id: 2,
      title: "Intelligent Chapter Generation",
      imgSrc: Chart2,
      description:
        "Automatically generate well-defined chapters by analyzing recordings for logical breaks and transitions.",
      name: "Chapter Generation.",
    },
    {
      id: 3,
      title: "Interactive Demo Creation",
      imgSrc: Chart3,
      description:
        "Transform sessions into engaging, step-by-step walkthroughs with intuitive controls and visual cues.",
      name: "Demo Creation.",
    },
    {
      id: 4,
      title: "Automatic Article Generation",
      imgSrc: Chart,
      description:
        "Generate informative articles from recordings using LLMs to save documentation effort.",
      name: "Article Generation.",
    },
    {
      id: 5,
      title: "Voice-Over and Voice Cloning",
      imgSrc: Chart2,
      description:
        "Add voice-overs or explore voice cloning for a consistent and polished guide narration.",
      name: "Voice Features.",
    },
    {
      id: 6,
      title: "Effortless Translation",
      imgSrc: Chart3,
      description:
        "Reach a global audience by seamlessly translating guides and articles into multiple languages.",
      name: "Effortless Translation.",
    },
  ];
  return (
    <section className=" py-[136px] w-[1168px] flex flex-col items-center ">
      <div className="mb-[54px]  sm:h-[192px]  text-center ">
        <h2 className=" text-heading-black text-[48px] leading-[52px] text-center ">
          Document Workflows Like Never Before
        </h2>
        <p className=" text-text-black text-[16px] leading-6 mt-2 text-center  "></p>
      </div>
      <div className=" flex flex-wrap gap-5 sm:w-[1168px] justify-center ">
        {dataSection.map((item) => (
          <div
            key={item.id}
            className=" sm:w-[372px] bg-light-gray  flex justify-center items-center flex-col p-[10px] rounded-2xl"
          >
            <div className="">
              <div className=" text-[13px] bg-white leading-4 flex justify-start font-[500] border-b border-border-color  py-[10px] px-[16px] sm:w-[352px] rounded-t-lg ">
                {item.title}
              </div>
              <Image
                src={item.imgSrc}
                alt="chart"
                width={352}
                height={372}
                className="shadow-effect-card rounded-b-lg"
              />
              <div className="py-[14px] pt-6 px-[14px]">
                <p className=" text-[14px] leading-5 text-light-black ">
                  <span className=" font-[500] mr-1 "> {item.name} </span>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataSection;
