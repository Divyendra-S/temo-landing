import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils/cn";

interface SectionProps {
  reverse?: boolean;
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  featureText: string;
}

const ReusableSection: React.FC<SectionProps> = ({
  reverse = false,
  imageSrc,
  imageAlt,
  title,
  description,
  featureText,
}) => {
  return (
    <section className="border border-border rounded-2xl bg-accent/30 p-6 md:p-10 md:pb-0 overflow-hidden mb-12 mt-12">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row md:space-x-[70px]"
        }`}
      >
        <div className="w-full md:w-[2000px] border rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={794}
            height={402}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
        <div
          className={cn(
            `mt-6 flex flex-col text-start md:mb-8 md:mt-0`,
            reverse ? "md:ml-0 md:mr-[70px]" : "md:mr-0 md:ml-[70px]"
          )}
        >
          <h3 className="font-medium text-lg md:text-2xl mb-4">{title}</h3>
          <p className="text-foreground/45 mb-4">{description}</p>
          <div className="flex space-x-2 items-center mt-8">
            <CheckIcon />
            <span className="text-foreground/45">{featureText}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" fill="none">
    <path
      fill="currentColor"
      d="M6.55 13 .85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13Z"
    />
  </svg>
);

export default ReusableSection;