import ContactForm from "@/components/Forms/ContactForm";
import Link from "next/link";
import React from "react";

const Schedule = () => {
  return (
    <section className="bg-primary-300">
      <div className="myContainer flex max-lg:flex-col">
        <div className="basis-1/2 flex justify-between flex-col min-h-full">
          <div>
            <h1>SCHEDULE A MEETING WITH US</h1>
            <p className="max-w-[605px] font-medium text-myGray mt-2">
              Let's discuss your vision for creating the perfect luxury space.
              Let’s Build Something Great Together.
            </p>
          </div>
          <div className="lg:max-w-[325px] max-lg:mt-10 space-y-4 max-md:grid-cols-1 max-md:gap-5 max-lg:grid grid-cols-2 gap-16">
            <div className="space-y-1">
              <p className="text-lg font-semibold">COMMON FAQs</p>
              <p className="text-myGray-100 text-sm">
                Find quick answers to common questions about our process,
                services, and consultations before booking your meeting.
              </p>
              <Link href="/faqs" className="text-primary underline text-sm">
                See all
              </Link>
            </div>
            <div className="space-y-1">
              <p className="text-lg font-semibold">Other ways to reach us</p>

              <a
                href="mailto:Info@veralyssa.com"
                className="text-myGray-100 text-sm w-fit"
              >
                Info@veralyssa.com
              </a>
              <p className="text-myGray-100 text-sm">
                40A5 Adeola Odeku, Victoria island
              </p>

              <a
                href="https://maps.app.goo.gl/zej4pSKN6tLqz9qC7"
                target="_blank"
                className="text-primary underline text-sm"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/2 myFlex lg:justify-center max-lg:mt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
