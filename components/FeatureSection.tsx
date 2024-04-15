import React from "react";
import Message from "../public/Message.png";
import Image from "next/image";
import Message2 from "../public/Message2.png";
import Message3 from "../public/Message3.png";

const FeatureSection = () => {
  const featureSection = [
    {
      description:
        "Whether you need to schedule recuttent alerts ot define advaced conditions you can buld it on index.",
      ImageSrc: Message,
      descriptionHeading: "Robust alerting",
    },
    {
      description:
        "Build datasets that anyone in your team can use to ensure easy adoption and consistency.",
      ImageSrc: Message2,
      descriptionHeading: "Advanced customization",
    },
    {
      description:
        "Take control of your visualisations with powerful customisation options to match your unique needs.",
      ImageSrc: Message3,
      descriptionHeading: "Advanced customization",
    },
    {
      description:
        "Built from day one with a privacy-focused design and compliant approach to securing your data.",
      ImageSrc: Message,
      descriptionHeading: "Advanced customization",
    },
    {
      descriptionHeading: "Advanced customization",
      ImageSrc: Message2,
      description:
        "Keep doing your analysis anywhere you are. Everything will sync back when you come online.",
    },
    {
      descriptionHeading: "Advanced customization",
      ImageSrc: Message3,
      description:
        "Search on Index is remarkably fast and relevant across tables, queries, datasets, and dashboards.",
    },
  ];
  return (
    <div className=" bg-background-color w-[99%] rounded-[32px] pt-[136px] pb-[144px] flex justify-center ">
      <div className=" w-[1100px] px-[6px] flex flex-col items-center  ">
        <div className=" sm:w-[536px]  text-center  ">
          <h2 className=" text-[48px] leading-[52px] text-heading-black ">
            Powerful out of the box
          </h2>
          <p className=" text-text-black mt-2 text-[16px] leading-6 ">
            Index is build from ground up to be fast, powerful and delghtful uo
            use.{" "}
          </p>
        </div>
        <div className="mt-[72px] w-[1088px] grid grid-cols-2 grid-rows-3 gap-12 ">
          {featureSection.map((item) => (
            <div key={item.descriptionHeading} className="  ">
              <Image
                src={item.ImageSrc}
                alt="message"
                width={520}
                height={208}
              />
              <div className=" h-[114px] w-full mb-[22.5px] py-6 px-7 ">
                <div className=" text-[14px] leading-5 font-[600] text-text-black ">
                  {item.descriptionHeading}{" "}
                </div>
                <p className=" mt-[6px] text-[14px] leading-5 text-text-black ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
