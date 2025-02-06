import ChatBot from "@/components/Navigation/ChatBot";
import FAQs from "@/components/Sections/Home/FAQs";
import FeaturedProjects from "@/components/Sections/Home/FeaturedProjects";
import Hero from "@/components/Sections/Home/Hero";
import Schedule from "@/components/Sections/Home/Schedule";
import { HomeFAQs } from "@/constants";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Schedule />
      <FAQs faqs={HomeFAQs} />
      <ChatBot />
    </main>
  );
};

export default HomePage;
