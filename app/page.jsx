import FeaturedProjects from "@/components/Sections/Home/FeaturedProjects";
import Hero from "@/components/Sections/Home/Hero";
import Schedule from "@/components/Sections/Home/Schedule";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Schedule />
    </main>
  );
};

export default HomePage;
