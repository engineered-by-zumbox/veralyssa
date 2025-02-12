import Button from "@/components/Button";
import Latest from "@/components/Sections/Blog/Latest";
import SeeAll from "@/components/Sections/Blog/SeeAll";

const BlogPage = () => {
  return (
    <main className="min-h-dvh !pt-16 lg:!pt-20">
      <div className="myContainer">
        <div className="myFlex gap-3">
          <p className="text-lg md:text-2xl">SUBSCRIBE TO OUR</p>
          <h3 className="font-semibold !text-4xl lg:!text-5xl">NEWSLETTER</h3>
        </div>
        <p className="text-myGray mt-4">
          Subscribe to our newsletter to stay updated on the latest trends in
          luxury design and exclusive tips for creating your dream space. Join
          our community and let's build something extraordinary together!
        </p>
        <div className="max-md:pt-10 md:mt-4">
          <Button
            cta="SUBSCRIBE NOW"
            link="#subscribe"
            className="bg-primary text-white !px-12"
          />
        </div>
      </div>
      <Latest />
      <SeeAll />
    </main>
  );
};

export default BlogPage;
