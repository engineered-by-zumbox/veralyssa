import Button from "@/components/Button";
import Link from "next/link";

const NewsLetter = () => {
  return (
    <section className="myContainer">
      <div>
        <h4 className="text-lg md:text-2xl">
          SUBSCRIBE TO OUR <br />{" "}
          <span className="font-semibold !text-4xl lg:!text-5xl">
            NEWSLETTER
          </span>
        </h4>
        <p className="max-w-[779px] text-myGray mt-4">
          Subscribe to our newsletter to stay updated on the latest trends in
          luxury design and exclusive tips for creating your dream space. Join
          our community and let's build something extraordinary together!
        </p>
        <div className="mt-4">
          <Button
            cta="SUBSCRIBE NOW"
            link="#subscribe"
            className="bg-primary text-white px-12"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
