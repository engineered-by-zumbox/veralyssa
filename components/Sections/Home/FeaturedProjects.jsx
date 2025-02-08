import Button from "@/components/Button";
import { Projects } from "@/constants";

const FeaturedProjects = () => {
  return (
    <section className="myContainer md:!py-24">
      <h1 className="text-center">Featured Projects</h1>
      <p className="text-center text-myGray mt-2">
        Discover our portfolio of luxury construction projects, where attention
        to detail meets <br className="max-md:hidden" /> uncompromising quality.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-16">
        {Projects.map((pr, i) => (
          <div
            key={i}
            className="relative group cursor-pointer h-[469px] rounded-2xl overflow-hidden"
          >
            <img
              src={pr.imageUrl}
              width={500}
              height={500}
              className="object-cover h-full"
            />
            <div className="absolute no-select rounded-2xl transition-all flex items-end duration-300 inset-0 scale-90 group-hover:scale-100 opacity-0 w-full h-full group-hover:opacity-100 bg-black/30">
              <div className="text-white p-6 space-y-3">
                <div>
                  <p className="opacity-70 mb-1 font-light">Project Name</p>
                  <p className="text-2xl font-semibold">{pr.name}</p>
                </div>
                <div>
                  <p className="opacity-70 mb-1 font-light">Category</p>
                  <p className="text-xl font-medium">{pr.category}</p>
                </div>
                <div>
                  <p className="opacity-70 mb-1 font-light">Description</p>
                  <p>{pr.description}</p>
                </div>
                <div className="pt-3">
                  <Button
                    cta="View project"
                    className="bg-primary-100 transition-all duration-300 text-white w-full myFlex text-center"
                    link={pr.link}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
