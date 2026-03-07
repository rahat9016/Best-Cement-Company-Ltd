import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      image: "/images/project-1.png",
      title: "Skyway Bay Complex",
      category: "Commercial",
    },
    {
      image: "/images/project-2.png",
      title: "Fox Valley Residence",
      category: "Residential",
    },
    {
      image: "/images/project-3.png",
      title: "Portland Overpass",
      category: "Infrastructure",
    },
  ];

  return (
    <section id="projects" className="relative bg-light pt-[90px] pb-[80px]">
      {/* Angled top separator */}
      <div
        className="absolute top-0 left-0 w-full h-16 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      <div className="site-container">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
              Our Projects
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight text-text">
              Built To Last,<br />
              Delivered On Time
            </h2>
          </div>
          {/* Stats */}
          <div className="flex gap-8 mt-6 md:mt-0">
            {[
              { number: "189+", label: "Projects Done" },
              { number: "77+", label: "Happy Clients" },
              { number: "85+", label: "Awards Won" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-extrabold text-2xl md:text-3xl text-primary">
                  {stat.number}
                </p>
                <p className="text-text-muted text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-xs font-heading font-bold">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm">
                  Completed with excellence and delivered ahead of schedule.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
