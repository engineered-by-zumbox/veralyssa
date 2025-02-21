import FAQs from "@/components/Sections/Home/FAQs";
import FeaturedProjects from "@/components/Sections/Home/FeaturedProjects";
import HeroNew from "@/components/Sections/Home/HeroNew";
import Schedule from "@/components/Sections/Home/Schedule";
import SubscribeModal from "@/components/SubscribeModal";
import { HomeFAQs } from "@/constants";
import { shuffleArray } from "@/lib/helper";

export const metadata = {
  title: "Veralyssa | Innovative Interior Design & Architecture",
  description:
    "Transform your space with Veralyssa's expert interior design and architectural solutions. We create stunning, functional spaces that reflect your vision and lifestyle.",
};

async function getNewsletterContent() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter-campaigns/active`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch newsletter content");
    return res.json();
  } catch (error) {
    console.error("Error fetching newsletter content:", error);
    return null;
  }
}

async function getFeaturedProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch projects");
    return res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
}

const HomePage = async () => {
  const [newsletterResult, projectsResult] = await Promise.allSettled([
    getNewsletterContent(),
    getFeaturedProjects(),
  ]);

  const newsletterData =
    newsletterResult.status === "fulfilled" ? newsletterResult.value : null;
  const projectsData =
    projectsResult.status === "fulfilled" ? projectsResult.value : null;

  const shuffledProjects = projectsData ? shuffleArray(projectsData) : null;
  const featuredProjects = shuffledProjects
    ? shuffledProjects.slice(0, 3)
    : null;

  return (
    <main>
      <HeroNew />
      {featuredProjects && <FeaturedProjects projects={featuredProjects} />}
      <Schedule />
      <FAQs faqs={HomeFAQs} />
      {newsletterData && <SubscribeModal initialData={newsletterData} />}
    </main>
  );
};

export default HomePage;
