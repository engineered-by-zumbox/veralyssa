import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = ({ faqs }) => {
  return (
    <section className="myContainer" id="faqs">
      <h1 className="text-center">FAQs</h1>
      <p className="opacity-95 text-center mt-3 text-sm  md:text-lg w-[90%] md:w-[50%] mx-auto">
        Find answers to your questions and learn more about our desktop frame
        offerings.
      </p>
      <div className="mt-10 md:mt-20">
        <AccordionDemo faqs={faqs} />
      </div>
    </section>
  );
};

export function AccordionDemo({ faqs }) {
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
          <AccordionContent className="max-w-[80%] md:max-w-[60%] text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQs;
