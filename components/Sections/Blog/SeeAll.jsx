import BlogCard2 from "@/components/Cards/BlogCard2";
import SectionHeader from "@/components/SectionHeader";
import { AllNews } from "@/constants";

const SeeAll = () => {
  return (
    <section className="myContainer">
      <SectionHeader
        title="See All"
        desc="Discover our portfolio of luxury construction projects, where attention to detail meets uncompromising quality."
      />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-y-16">
        {AllNews.map((news, i) => (
          <BlogCard2 key={i} news={news} />
        ))}
      </div>
    </section>
  );
};

export default SeeAll;
