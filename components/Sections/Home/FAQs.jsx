import AnimatedTitle from "@/components/AnimatedTtitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "@/constants";
import { cn } from "@/lib/utils";

const FAQs = () => {
  return (
    <section className="myContainer" id="faqs">
      <AnimatedTitle
        title="Frequently Asked Questions"
        tag="h1"
        className="text-center"
      />
      <p className="opacity-95 text-center mt-3 text-myGray md:text-lg w-[90%] md:w-[50%] mx-auto">
        Find answers to common questions about Veralyssa's premium construction
        and interior finishing services.
      </p>
      <div className="mt-10 md:mt-20">
        <Accordion type="single" collapsible className="w-full">
          {faqCategories.map((category, index) => (
            <AccordionItem
              key={index}
              value={`category-${index}`}
              className={`border-[#E3E3E3] ${index === 0 ? "border-t" : ""}`}
            >
              <AccordionTrigger className="text-xl py-6 font-semibold">
                {category.category}
              </AccordionTrigger>
              <AccordionContent>
                <CategoryAccordion faqs={category.faqs} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export function CategoryAccordion({ faqs, className }) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full pl-4 md:pl-6", className)}
    >
      {faqs?.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i + 1}`}
          className="border-[#E3E3E3] border-opacity-70 last:border-0"
        >
          <AccordionTrigger className="text-base py-5 opacity-95 md:text-lg font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent
            className={cn("accd md:max-w-[90%] text-base", className)}
          >
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQs;
