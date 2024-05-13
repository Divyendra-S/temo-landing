import React from "react";
import Image, { StaticImageData } from "next/image";
import DashboardImage from "../../public/DashboardImage.png";
import FeaturesDetails from "./FeaturesDetails";
interface SectionProps {
  features: {
    status: string;
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt: string;
  }[];
}

const Section: React.FC<SectionProps> = ({ features }) => {
  return (
    <section className="flex justify-between space-y-12  md:space-y-0 space-x-8 flex-col md:flex-row overflow-hidden mb-12">
      {features.map(
        ({ status, title, description, imageSrc, imageAlt }, index) => (
          <FeatureCard
            key={index}
            status={status}
            title={title}
            description={description}
            imageSrc={DashboardImage}
            imageAlt={imageAlt}
          />
        )
      )}
      <FeaturesDetails
        title="Magic inbox"
        description="Automatic matching of incoming invoices or receipts to the right transaction."
        items={[
          "Use your personalized email address for your invoices and receipts.",
          "The invoice arrives in the inbox, with our AI solution the invoice automatically matches with the right transaction.",
          "Your transaction now have the right basis/attachments for you to export.",
        ]}
        email="Temo.ai"
        imageSrc={DashboardImage}
      />
    </section>
  );
};

interface FeatureCardProps {
  status: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  status,
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="border border-border basis-1/3 rounded-2xl bg-accent/30 p-10 md:text-center flex flex-col">
      {status === "coming-soon" && (
        <span className="text-primary border border-primary rounded-full self-start font-semibold px-3 text-xs py-1.5 mb-4">
          Coming soon
        </span>
      )}
      <h4 className="font-medium text-xl md:text-2xl mb-4">{title}</h4>
      <p className="text-foreground/45">{description}</p>
      <div className="mt-8 md:mt-8">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1107}
          height={528}
          className=""
          priority
        />
      </div>
    </div>
  );
};

interface FeatureDetailsProps {
  title: string;
  description: string;
  items: string[];
  email: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureDetails: React.FC<FeatureDetailsProps> = ({
  title,
  description,
  items,
  email,
  imageSrc,
  imageAlt,
}) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="border border-border md:basis-2/3 rounded-2xl bg-accent/30 p-10 flex justify-between md:space-x-8 md:flex-row flex-col">
      <div className="flex flex-col md:basis-1/2">
        <h4 className="font-medium text-xl md:text-2xl mb-4">{title}</h4>
        <p className="text-foreground/45 mb-4">{description}</p>
        <ul className="list-decimal pl-4 space-y-3">
          {items.map((item, index) => (
            <li key={index} className="text-foreground/45">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center relative w-full rounded-md border border-border py-2 px-4 max-w-[240px] mt-8">
          <div className="pr-7 text-foreground/45 text-sm">{email}</div>
          <button type="button" onClick={copyToClipboard}>
            <span className="sr-only">Copy</span>
            <div
              className="absolute right-4 top-2.5"
              style={{
                opacity: copied ? 0 : 1,
                transform: copied ? "scale(0) translateZ(0px)" : "none",
              }}
            >
              <CopyIcon />
            </div>
            <div
              className="absolute right-4 top-2.5"
              style={{
                opacity: copied ? 1 : 0,
                transform: copied ? "none" : "scale(0) translateZ(0px)",
              }}
            >
              <CheckIcon />
            </div>
          </button>
        </div>
      </div>
      <div className="md:basis-1/2 mt-8 md:mt-0 -bottom-[8px] relative">
        <Image
          src={`${imageSrc}-light.png`}
          alt="osgoi"
          width={1296}
          height={1197}
          className="block dark:hidden object-contain"
          priority
        />
        <Image
          src={`${imageSrc}.png`}
          alt="hojs"
          width={1296}
          height={1197}
          className="hidden dark:block object-contain"
          priority
        />
      </div>
    </div>
  );
};

const CopyIcon: React.FC = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none">
    <path
      fill="currentColor"
      d="m14 5.167-8 8L2.333 9.5l.94-.94L6 11.28l7.06-7.053.94.94Z"
    />
  </svg>
);

export default Section;
