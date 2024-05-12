import React from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AccordionItem {
  title: string;
  content: string;
}

const AccordionSection: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
  return (
    <div className="md:basis-1/2">
      <Accordion type="single" collapsible className="w-full">
        {items.map(({ title, content }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const OpenStartup: React.FC = () => {
  const accordionItems: AccordionItem[] = [
    { title: 'Open source', content: 'Open source content' },
    { title: 'Community', content: 'Community content' },
    { title: 'Open roadmap', content: 'Open roadmap content' },
    { title: 'Security', content: 'Security content' },
  ];

  return (
    <section className="mb-32">
      <div className="mb-12 text-start">
        <h2 className="text-4xl mb-4">Open startup</h2>
        <p className="text-[#707070]">
          We believe in being as transparent as possible, from{' '}
          <Link
            href="https://git.new/midday"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            code
          </Link>{' '}
          to{' '}
          <Link href="/open-startup" className="underline">
            metrics
          </Link>
          . <br />
          and you can also{' '}
          <Link href="/feature-request" className="underline">
            request a feature
          </Link>{' '}
          and vote on which ones we should prioritize.
        </p>
      </div>
      <div className="border border-border rounded-2xl bg-white dark:bg-[#121212] p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:space-x-16">
          <AccordionSection items={accordionItems} />
          {/* Repo card content */}
        </div>
      </div>
    </section>
  );
};

export default OpenStartup;