import PortfolioCard from "@/components/PortFolioCard";

const SingleProjectPage = async ({ params }) => {
  const { id } = await params;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.statusText}`);
    }

    const data = await res.json();
    return (
      <main className="min-h-dvh !pt-28 lg:!pt-32 myContainer">
        <PortfolioCard port={data} type="2" />
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

export default SingleProjectPage;
