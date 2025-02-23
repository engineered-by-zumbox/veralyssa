import Header from "@/components/Sections/Portfolio/Header";
import PortFolioLists from "@/components/Sections/Portfolio/PortFolio";

export const metadata = {
  title: "Our Projects | Veralyssa Limited",
  description:
    "Explore our portfolio of completed projects, showcasing our expertise in construction, remodeling, interior design, and project management across various sectors.",
  robots: {
    index: true,
    follow: true,
  },
};

const PortfolioPage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.statusText}`);
    }

    const data = await res.json();

    return (
      <main className="min-h-dvh !pt-16 lg:!pt-20">
        <Header />
        <PortFolioLists projects={data} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);

    return (
      <main className="min-h-dvh !pt-16 lg:!pt-20 flex items-center justify-center">
        <p className="text-red-500">
          Failed to load projects. Please try again later.
        </p>
      </main>
    );
  }
};

export default PortfolioPage;
