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
      <h1 className="text-center">Frequently Asked Questions</h1>
      <p className="opacity-95 text-center mt-3 text-myGray md:text-lg w-[90%] md:w-[50%] mx-auto">
        Find answers to common questions about Veralyssa's premium construction
        and interior finishing services.
      </p>
      <div className="mt-10 md:mt-20 space-y-12">
        {faqCategories.map((category, index) => (
          <div key={index}>
            <h2 className="text-xl opacity-50 md:text-2xl font-semibold mb-6">
              {category.category}
            </h2>
            <AccordionDemo faqs={category.faqs} />
          </div>
        ))}
      </div>
    </section>
  );
};

export function AccordionDemo({ faqs, className }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs?.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i + 1}`}
          className="first:border-t border-[#E3E3E3]"
        >
          <AccordionTrigger className="text-base py-7 opacity-95 md:text-lg font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "accd md:max-w-[60%] text-base",
              className
            )}
          >
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQs;
