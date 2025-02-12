import Latest from "@/components/Sections/Blog/Latest";
import NewsLetter from "@/components/Sections/Blog/NewsLetter";
import SeeAll from "@/components/Sections/Blog/SeeAll";

const BlogPage = () => {
  return (
    <main className="min-h-dvh !pt-16 lg:!pt-20">
      <Latest />
      <SeeAll />
      <NewsLetter />
    </main>
  );
};

export default BlogPage;
