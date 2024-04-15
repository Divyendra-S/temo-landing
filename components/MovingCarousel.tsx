import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Commands from "../public/Commands.png";
import Image from "next/image";

const MovingCarousel = () => {
  const corouselItems = [
    {
      name: "Create block",
      logo: "",
    },
    {
      name: "Invite to create",
      logo: "",
    },
    {
      name: "Change theme: Dark",
      logo: "",
    },
    {
      name: "Go to board",
      logo: "",
    },
    {
      name: "Copy board link",
      logo: "",
    },
    {
      name: "Contact support...",
      logo: "",
    },
  ];
  return (
    <div className=" sm:w-[1156px] h-[472px] pt-[64px] pb-12 mb-5 bg-background-color rounded-[20px] flex flex-col items-center ">
      <h3 className=" text-4xl text-heading-black  ">
        Every action at your fingertips
      </h3>
      <p className=" text-sm mt-2 text-text-black text-center ">
        {" "}
        Stay flow and improve your workflow with our command bar, providign{" "}
        <br /> easy access to all features through just a few keystrokes.
      </p>
      <div className="w-full h-[176px] pt-10 pb-12 ">
        <InfiniteMovingCards
          items={corouselItems}
          pauseOnHover={false}
          direction="right"
        />
        <InfiniteMovingCards
          items={corouselItems}
          pauseOnHover={false}
          direction="left"
        />
        '
      </div>
      <Image src={Commands} alt="commands" width={467} height={110} />
    </div>
  );
};

export default MovingCarousel;
