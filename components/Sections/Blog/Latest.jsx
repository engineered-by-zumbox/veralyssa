import BlogCard1 from "@/components/Cards/BlogCard1";
import SectionHeader from "@/components/SectionHeader";
import { LatestNews } from "@/constants";
import React from "react";

const Latest = () => {
  return (
    <section className="myContainer">
      <SectionHeader
        title="Latest from this week"
        desc="Discover our portfolio of luxury construction projects, where attention to detail meets uncompromising quality."
      />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 max-md:gap-7">
        {LatestNews.map((news, i) => (
          <BlogCard1 key={i} news={news} />
        ))}
      </div>
    </section>
  );
};

export default Latest;
