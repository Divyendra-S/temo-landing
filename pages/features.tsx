
import Dashbooard from "@/components/featuresSection/Dashbooard";
import QualitiesSection from "@/components/featuresSection/QualitiesSection";
import Navbar from "@/components/navbar";
import React from "react";

const features = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-background ">
        <Navbar />
        <Dashbooard />
        <QualitiesSection/>
      </div>
    </>
  );
};

export default features;
