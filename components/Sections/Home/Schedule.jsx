import ContactForm from "@/components/Forms/ContactForm";
import Link from "next/link";
import React from "react";

const Schedule = () => {
  return (
    <section className="bg-[#F3F3F3]">
      <div className="myContainer">
        <h1 className="text-center">Schedule a Meeting <br className="md:hidden" /> With Us</h1>
        <p className="max-w-[605px] text-center mx-auto text-myGray-500 mt-4">
          Let's discuss your vision for creating the perfect luxury space.{" "}
          <br className="max-md:hidden" />
          Let’s Build Something Great Together.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Schedule;
