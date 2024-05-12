import React from "react";
import Image, { StaticImageData } from "next/image";

interface SectionProps {
  title: string;
  description: string;
  imgSrc: {
    src: StaticImageData;
    width: number;
    height: number;
  };
  imgAlt: string;
  isComingSoon?: boolean;
}

const ComingSoonSection: React.FC<SectionProps> = ({
  title,
  description,
  imgSrc,
  imgAlt,
  isComingSoon = false,
}) => {
  return (
    <section className="border border-border rounded-2xl text-start bg-white dark:bg-[#121212] p-8 md:p-10 mb-12">
      <div className="flex flex-col md:flex-row md:space-x-12">
        <div style={{ transform: "none" }}>
          <Image
            alt={imgAlt}
            width={imgSrc.width}
            height={imgSrc.height}
            src={imgSrc.src}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="mt-6 md:max-w-[40%] md:ml-8">
          {isComingSoon && (
            <span className="text-primary border border-primary rounded-full self-start font-semibold px-3 text-xs py-1.5 mb-4">
              Coming soon
            </span>
          )}
          <h3 className="font-medium text-xl md:text-2xl mt-4 mb-4">{title}</h3>
          <p className="text-[#878787]">{description}</p>
          <div className="mt-8">{/* SVG content */}</div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
