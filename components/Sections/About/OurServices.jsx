import React from "react";
import { AccordionDemo } from "../Home/FAQs";
import Image from "next/image";

const ServicesFAQs = [
  {
    question: "1. CONSTRUCTION",
    answer:
      "We provide comprehensive construction services, managing projects from the initial conceptualisation to the final completion. Our construction team possesses expertise in various sectors, including residential, commercial, and industrial projects. With a focus on quality, safety, and efficiency, we deliver robust structures that meet the highest industry standards.",
  },
  {
    question: "2. REMODELLING",
    answer:
      "Veralyssa Limited specializes in transforming existing spaces into functional and aesthetically appealing areas. Whether it's a residential renovation or a commercial remodel, our team is equipped to handle projects of all scales. We work closely with our clients to understand their requirements, offering innovative design solutions that enhance the value and usability of the space.",
  },
  {
    question: "3. INTERIOR DESIGN",
    answer:
      "Our team of talented interior designers combines creativity and functionality to create captivating interior spaces. We collaborate closely with clients to understand their preferences, style, and budget. From conceptualisation to implementation, we curate designs that reflect our clients' vision while ensuring optimal space utilisation, visual harmony, and a seamless blend of aesthetics and functionality.",
  },
  {
    question: "4. PROJECT MANAGEMENT",
    answer:
      "At Veralyssa Limited, we take pride in our efficient project management approach. Our dedicated project managers oversee every aspect of the construction and design process, ensuring smooth coordination timely execution, and adherence to budgetary constraints. We work in close collaboration with architects, contractors, and suppliers to ensure that projects are completed on time and within the allocated resources.",
  },
  {
    question: "5. CONSULTING",
    answer:
      "With our extensive industry knowledge and expertise, we offer consulting services to clients seeking professional advice on construction and design-related matters. We provide expert guidance on feasibility studies, cost estimation, construction techniques, materials selection, and sustainable practices. Our consulting services empower clients to make informed decisions, leading to successful project outcomes.",
  },
];

const OurServices = () => {
  return (
    <section className="myContainer">
      <div className="rounded-md border mb-7 md:mb-16 border-[#B1B1B1] w-fit px-4 py-1 font-medium">
        Our Services
      </div>
      <div className="flex max-lg:flex-col gap-10">
        <div className="basis-[55%]">
          <AccordionDemo faqs={ServicesFAQs} className="max-w-[100%] md:max-w-[80%]" />
        </div>
        <div className="basis-[45%] grid h-fit gap-3 md:gap-4">
          <div className="grid grid-cols-[52%_45%] gap-3 md:gap-5">
            <Image
              src="/images/build3.png"
              alt="governor's office"
              width={270}
              height={194}
              className="w-full h-[194px] object-cover rounded-2xl"
            />
            <Image
              src="/images/build2.png"
              alt="governor's office"
              width={270}
              height={194}
              className="w-full h-[194px] object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            <Image
              src="/images/ab1.png"
              alt="governor's office"
              width={270}
              height={194}
              className="w-full h-[194px] object-cover rounded-2xl"
            />
            <Image
              src="/images/build.png"
              alt="governor's office"
              width={270}
              height={194}
              className="w-full h-[194px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="flex lg:items-center justify-between max-lg:flex-col gap-5 mt-16 lg:mt-32">
        <h1 className="!max-md:text-5xl md:!text-[64px] md:leading-[77.45px]">
          OUR VISION <br /> STATEMENT{" "}
        </h1>
        <div className="max-w-[612px] lg:text-end">
          <p className="font-bold">OUR VISION</p>
          <p>
            We envision a future where we become synonymous with excellence,
            creativity, and an unwavering commitment to delivering exceptional
            results. By blending functionality, aesthetics, and sustainability,
            we aim to shape the built environment in a way that positively
            impacts lives and leaves a lasting legacy of beauty, harmony, and
            timeless elegance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
