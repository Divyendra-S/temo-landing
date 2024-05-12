import React from "react";
import ReusableSection from "./ReusableSection";
import DashboardImage from "../../public/DashboardImage.png";
import Section from "./Section";
import ComingSoonSection from "./ComingSoonSection";
import OpenStartup from "./OpenStartUp";
import BottomSection from "./BottomSection";

const QualitiesSection = () => {
  const imgSrc = {
    src: DashboardImage,
    width: 793,
    height: 405,
  };

  const features = [
    {
      status: 'coming-soon',
      title: 'Invoicing',
      description: 'We\'re working hard to give you the best invoice solution. It will feature web based invoices, live collaboration and project sync.',
      
      imageAlt: 'Invoice',
    },
  ];
  return (
    <section className="text-center mt-24 md:mt-[200px] mb-12 containers ">
      <h3 className="text-4xl md:text-8xl font-medium">Save hours.</h3>
      <p className="mt-4 md:mt-8 text-foreground/45 max-w-[600px] mx-auto">
        From automated receipt-to-transaction mapping to conversing with your
        financials and consolidating all your files, Midday not only assists you
        with your most tiresome business tasks but also enhances your ability to
        gain valuable business insights.
      </p>
      <ReusableSection
        imageSrc={DashboardImage}
        imageAlt="Overview"
        title="Financial overview"
        description="Bring your own bank. We connect to over 20 000+ banks in 33 countries across US, Canada, UK and Europe. Keep tabs on your expenses and income, and gain a clearer picture of your business's financial track record and current situation."
        featureText="Share financial reports"
      />
      <ReusableSection
        reverse={true}
        imageSrc={DashboardImage}
        imageAlt="Overview"
        title="Financial overview"
        description="Bring your own bank. We connect to over 20 000+ banks in 33 countries across US, Canada, UK and Europe. Keep tabs on your expenses and income, and gain a clearer picture of your business's financial track record and current situation."
        featureText="Share financial reports"
      />
      <Section features={features} />
      
      <ComingSoonSection
        title="Your Virtual CFO"
        description="With Midday AI, you can ask anything and gain insights into your financial situation. Understand your major expenses and income sources. Inquire about transactions without receipts or explore revenue patterns like Burn rate or MRR. Learning from your financial data helps you save money or increase earnings in the long run."
        imgSrc={imgSrc}
        imgAlt="AI"
        isComingSoon
      />
      <OpenStartup />
      <BottomSection/>
    </section>
  );
};

export default QualitiesSection;
