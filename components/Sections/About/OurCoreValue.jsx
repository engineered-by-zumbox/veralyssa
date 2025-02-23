import React from "react";

const CoreValue = [
  {
    title: "personalization",
    desc: "Recognizing and respecting the individuality of each client, tailoring designs and solutions to their unique preferences and needs.",
  },
  {
    title: "excellence",
    desc: "Striving for the highest standards of craftsmanship, quality, and attention to detail in every project undertaken.",
  },
  {
    title: "elegance",
    desc: "Focusing on creating sophisticated and refined spaces that exude luxury and timeless beauty.",
  },
  {
    title: "legacy",
    desc: "Creating spaces and structures that endure, leaving a lasting legacy of exceptional design and craftsmanship for generations to come.",
  },
  {
    title: "sustainability",
    desc: "integrating environmentally friendly practices and materials, promoting sustainable construction and design solutions.",
  },
];

const CoreEssence = [
  {
    title: "1. CREATIVITY AND INNOVATION",
    desc: "incorporating new materials, techniques,and technologies to create unique and aesthetically pleasing spaces.",
  },
  {
    title: "2. QUALITY CRAFTSMANSHIP",
    desc: "delivering high-quality workmanship in every aspect of our work.",
  },
  {
    title: "3. SUSTAINABILITY AND ENVIRONMENTAL CONSCIOUSNESS",
    desc: "Integrating sustainable practices and environmentally friendly solutions into our construction and design processes.",
  },
  {
    title: "4. CLIENT COLLABORATION:",
    desc: "Prioritizing effective communication and collaboration with clients and translating their ideas into functional and visually appealing designs.",
  },
  {
    title: "5. CUSTOMER SATISFACTION",
    desc: "Placing a strong emphasis on customer satisfaction by delivering projects on time, within budget, and exceeding client expectations.",
  },
  {
    title: "6. ATTENTION TO DETAIL",
    desc: "Paying meticulous attention to every detail of the project, from the initial concept to the final touches. This involves ensuring precision in measurements, finishes, and overall design aesthetics.",
  },
  {
    title: "7. FUNCTIONALITY AND PRACTICALITY",
    desc: "Combining creativity with practicality to create spaces that are not only visually appealing but also functional and efficient",
  },
];

const WhyChooseUs = [
  {
    title: "COMMITMENT TO EXCELLENCE",
    desc: "We strive for excellence in every project we undertake, ensuring the highest standards of quality, craftsmanship, and professionalism.",
  },
  {
    title: "EXPERIENCED TEAM",
    desc: "Our team comprises skilled professionals with years of industry experience, bringing a wealth of expertise to every project we undertake.",
  },
  {
    title: "INNOVATIVE DESIGNS",
    desc: "Our team of designers stays updated with the latest trends and technologies, offering cutting-edge designs that are both functional and visually appealing.",
  },
  {
    title: "TIMELY DELIVERY",
    desc: "We understand the importance of timely project completion, and we employ efficient project management strategies to ensure that projects are delivered on schedule.",
  },
  {
    title: "CUSTOMER SATISFACTION",
    desc: "Client satisfaction is our top priority, and we work closely with our clients to understand their needs, preferences, and budget, delivering tailored solutions that exceed expectations.",
  },
  {
    title: "INTEGRITY AND TRANSPARENCY",
    desc: "We uphold the values of integrity, transparency, and open communication, fostering strong and long-lasting relationships with our clients.",
  },
];

const Divider = () => (
  <div className="h-[147px] w-full relative">
    <div className="absolute w-full h-[0.4px] top-1/2 -translate-y-1/2 right-0 left-0 bg-[#DBDBDB]" />
    <div className="absolute w-[100px] h-[100px] md:w-[147px] rounded-full md:h-[147px] top-1/2 -translate-y-1/2 -left-[50px] md:-left-[147px] bg-[#F9F9F9]" />
    <div className="absolute w-[100px] h-[100px] md:w-[147px] rounded-full md:h-[147px] top-1/2 -translate-y-1/2 -right-[50px] md:-right-[147px] bg-[#F9F9F9]" />
  </div>
);

const CoreSection = ({ title, coreInfo, type = 1 }) => (
  <div className="my-10 md:my-16">
    <h1 className="text-[#B1B1B1]">{title}</h1>
    <div
      className={`mt-7 md:mt-16 grid gap-7 ${
        type === 1 ? "md:grid-cols-2" : "md:grid-cols-3"
      }  md:gap-14 md:place-content-between`}
    >
      {coreInfo.map((value, i) => (
        <div key={i}>
          {type === 1 ? (
            <div
              key={i}
              className={`lg:max-w-[540px] ${i % 2 === 1 && "md:text-end"}`}
            >
              <p className="font-bold mb-1">{value.title}</p>
              <p>{value.desc}</p>
            </div>
          ) : (
            <div
              key={i}
              className={`lg:max-w-[540px] text-left md:text-left ${
                i % 3 === 1 ? "md:text-center" : ""
              } ${i % 3 === 2 ? "md:text-right" : ""}`}
            >
              <p className="font-bold mb-1">{value.title}</p>
              <p>{value.desc}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const OurCoreValue = () => {
  return (
    <section className="myContainer max-md:!pt-0">
      <div className="myContainer !py-0 bg-white rounded-3xl overflow-hidden">
        <CoreSection title="OUR CORE VALUES" coreInfo={CoreValue} />
        <Divider />
        <CoreSection title="OUR CORE ESSENCE" coreInfo={CoreEssence} type={2} />
        <Divider />
        <CoreSection
          title="WHY YOU SHOULD CHOOSE VERALYSSA"
          coreInfo={WhyChooseUs}
        />
      </div>
    </section>
  );
};

export default OurCoreValue;
