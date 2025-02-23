import Equipments from "@/components/Sections/About/Equipments";
import OurCoreValue from "@/components/Sections/About/OurCoreValue";
import OurServices from "@/components/Sections/About/OurServices";
import Project from "@/components/Sections/About/Project";

async function getFeaturedProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        `Failed to fetch projects: ${res.status} - ${
          errorData?.message || res.statusText
        }`
      );
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
}

const AboutPage = async () => {
  const projects = await getFeaturedProjects();

  return (
    <main className="min-h-dvh !pt-16 lg:!pt-20 bg-[#F9F9F9]">
      <OurServices />
      <OurCoreValue />
      {projects ? (
        <Project projects={projects} />
      ) : (
        <p>Error loading projects or no projects available.</p>
      )}
      <Equipments />
    </main>
  );
};

export default AboutPage;
