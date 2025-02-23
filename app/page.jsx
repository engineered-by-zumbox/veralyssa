import PageLoader from "@/components/PageLoader";
import FAQs from "@/components/Sections/Home/FAQs";
import FeaturedProjects from "@/components/Sections/Home/FeaturedProjects";
import HeroNew from "@/components/Sections/Home/HeroNew";
import Schedule from "@/components/Sections/Home/Schedule";
import { HomeFAQs } from "@/constants";
import { shuffleArray } from "@/lib/helper";

export const metadata = {
  title: "Veralyssa Limited | Construction, Remodeling, Interior Design & More",
  description:
    "Veralyssa Limited offers top-tier services in construction, remodeling, interior design, project management, and consulting. We deliver excellence from concept to completion.",
  robots: {
    index: true,
    follow: true,
  },
};

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
  const projectsData = await getFeaturedProjects();

  const shuffledProjects = projectsData ? shuffleArray(projectsData) : null;
  const featuredProjects = shuffledProjects
    ? shuffledProjects.slice(0, 3)
    : null;

  return (
    <main>
      <PageLoader />
      <HeroNew />
      {featuredProjects && <FeaturedProjects projects={featuredProjects} />}
      <Schedule />
      <FAQs faqs={HomeFAQs} />
    </main>
  );
};

export default HomePage;
