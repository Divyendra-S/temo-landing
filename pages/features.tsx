import Dashbooard from "@/components/featuresSection/Dashbooard";
import Navbar from "@/components/navbar";
import React from "react";

const features = () => {
  return (
    <>
      <div className="flex justify-center bg-background ">
        <Navbar />
        <Dashbooard />
      </div>
    </>
  );
};

export default features;
